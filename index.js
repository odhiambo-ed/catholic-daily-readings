const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const { getCatholicDailyReadings } = require("get-catholic-daily-readings");

const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(morgan("common"));
app.use(helmet());

const port = 2321;

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.json({
    message: "Entry point",
  });
});

app.get("/readings", (req, res) => {
  getCatholicDailyReadings().then((data) => {
    res.json({
      data: data,
    });
  });
});
