const express = require('express');
const app = express();
const PORT = 3000;

// Sample London Tube station names
const tubeStations = [
  'Paddington',
  'Victoria',
  'King\'s Cross St Pancras',
  'Liverpool Street',
  'Waterloo',
  'Baker Street',
  'Oxford Circus',
  'Bond Street',
  'Holborn',
  'Euston Square',
];

// Route to get all station names
app.get('/stations', (req, res) => {
  res.json({ stations: tubeStations });
});

// Route to get information about a specific station
app.get('/stations/:stationName', (req, res) => {
  const stationName = req.params.stationName;
  const stationInfo = {
    name: stationName,
    // You can add more information about the station if needed
  };
  res.json(stationInfo);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
