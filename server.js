import express from "express";

import cors from "cors";

import axios from "axios";

const app = express();

app.use(cors());

app.get("/api/ssl-check", async (req, res) => {

  const domain = req.query.domain;

  try {

   const response = await axios.get(
  `https://api.ssllabs.com/api/v3/analyze?host=${domain}&publish=off&startNew=on&all=done&fromCache=on`
);

    res.json(response.data);

  } catch (error) {

    console.error(error.message);

    res.status(500).json({
      error: "Failed to fetch SSL report"
    });

  }

});

app.listen(5000, () => {

  console.log(
    "SSL Backend running on port 5000"
  );

});