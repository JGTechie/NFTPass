import express from "express";
import { NFTStorage, File } from "nft.storage";
import axios from "axios";
import { OpenAI } from "openai";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
const app = express();
app.use(cors());
app.use(express.json());
const PORT = 8080;

const tubeStations = [
  "Paddington",
  "Victoria",
  "King's Cross St Pancras",
  "Liverpool Street",
  "Waterloo",
  "Baker Street",
  "Oxford Circus",
  "Bond Street",
  "Holborn",
  "Euston Square",
];

// Route to get all station names
app.get("/stations", (req, res) => {
  res.json({ stations: tubeStations });
});

// Route to get information about a specific station
app.get("/stations/:stationName", (req, res) => {
  const stationName = req.params.stationName;
  const stationInfo = {
    name: stationName,
    // You can add more information about the station if needed
  };
  res.json(stationInfo);
});

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.post("/generate", async (req, res) => {
  const destination = req.body.destination;
  if (!destination) {
    res.status(400).json({ error: "Destination not provided" });
    return;
  }

  console.log(`Generating image for ${destination} station...`);
  const response = await openai.images.generate({
    model: "dall-e-3",
    prompt: `${destination} station, London`,
    n: 1,
    size: "1024x1024",
  });

  console.log("Generated image!");
  console.log(`${response.data[0].url}`);
  res.json({
    url: response.data[0].url,
  });
});
app.get("/getPrice", async (req, res) => {
  const destination = req.body.destination;
  if (!destination) {
    res.status(400).json({ error: "Destination not provided" });
    return;
  }

  const price = (Math.random() * (10 - 1) + 1).toFixed(2);
  res.json({
    destination: destination,
    price: price,
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
