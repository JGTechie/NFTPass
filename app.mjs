import express from "express";
import { NFTStorage, File } from "nft.storage";
import axios from "axios";
import { OpenAI } from "openai";
import dotenv from "dotenv";
dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
const app = express();
const PORT = 3000;

// Sample London Tube station names
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

app.get("/generate", async (req, res) => {
  const response = await openai.images.generate({
    model: "dall-e-3",
    prompt: "Oxford Circus station, London",
    n: 1,
    size: "1024x1024",
  });

  console.log(response);
  res.json({ url: response.data[0].url });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
