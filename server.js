import express from "express";

import cors from "cors";

import axios from "axios";

import dotenv from "dotenv";

import {
  sendSSLAlert,
  sendOrderEmail,
} from "./server/sendEmail.js";

dotenv.config();

const app = express();

app.use(cors());
app.get("/api/test-order-email")
app.post(
  "/api/send-order-email",

  express.json(),

  async (req, res) => {

    try {

      const {
        email,
        customerName,
        service,
        amount,
      } = req.body;

      await sendOrderEmail(

        email,

        customerName,

        service,

        amount

      );

      res.json({
        success: true,
      });

    } catch (error) {

      console.error(error);

      res.status(500).json({
        success: false,
      });

    }

  }
);
/* SSL CHECK API */
app.get(
  "/api/ssl-check",

  async (req, res) => {

    const domain =
      req.query.domain;

    try {

      const response =
        await axios.get(
          `https://api.ssllabs.com/api/v3/analyze?host=${domain}&publish=off&startNew=on&all=done&fromCache=on`
        );

      res.json(
        response.data
      );

    } catch (error) {

      console.error(
        error.message
      );

      res
        .status(500)
        .json({
          error:
            "Failed to fetch SSL report",
        });

    }

  }
);

/* TEST ORDER EMAIL */
app.get(
  "/api/test-order-email",

  async (req, res) => {

    try {

      await sendOrderEmail(

        "murugasankar@gmail.com",

        "Muruga",

        "Enterprise SSL Security",

        4999

      );

      res.json({
        success: true,
        message:
          "Order email sent",
      });

    } catch (error) {

      console.error(error);

      res.status(500).json({
        success: false,
      });

    }

  }
);

/* SERVER */
app.listen(5000, () => {

  console.log(
    "SSL Backend running on port 5000"
  );

});