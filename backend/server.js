require("dotenv").config();

const express = require("express");
const { Resend } = require("resend");

const app = express();
const PORT = process.env.PORT || 3000;

if (!process.env.RESEND_API_KEY) {
  throw new Error("RESEND_API_KEY is not set in environment (.env file)");
}

const resend = new Resend(process.env.RESEND_API_KEY);

app.use(express.json());

// Allow the React/Vite frontend to communicate with this Express backend.
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }

  next();
});

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

app.post("/subscribe", async (req, res) => {
  const email = req.body.email?.trim();

  if (!email || !emailRegex.test(email)) {
    return res.status(400).json({
      message: "A valid email is required.",
    });
  }

  console.log("Subscriber:", email);

  try {
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Welcome to DEV@Deakin!",
      html: `
        <h1>Welcome to DEV@Deakin!</h1>
        <p>Thank you for subscribing to DEV@Deakin.</p>
        <p>We are excited to have you with us!</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return res.status(500).json({
        message: "Failed to send welcome email.",
      });
    }

    // A successful Resend email request corresponds to HTTP 200.
    console.log("Resend HTTP Status: 200");
    console.log("Email sent successfully!");
    console.log("Resend response:", data);

    return res.status(200).json({
      message: "Subscription successful! Welcome email sent.",
    });
  } catch (error) {
    console.error("Server error:", error);
    return res.status(500).json({
      message: "Something went wrong.",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Express backend running at http://localhost:${PORT}`);
});
