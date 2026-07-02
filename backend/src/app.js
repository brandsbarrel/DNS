import "./config/env.js";
import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contact.routes.js";

const app = express();

function getCorsOrigins() {
  const rawOrigins = process.env.CORS_ORIGIN || "*";

  if (rawOrigins === "*") {
    return "*";
  }

  return rawOrigins
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);
}

app.use(
  cors({
    origin: getCorsOrigins(),
  })
);
app.use(express.json({ limit: "1mb" }));

app.get("/health", (_req, res) => {
  res.json({ ok: true, service: "sng-maintenance-backend" });
});

app.use("/", contactRoutes);

app.use((err, _req, res, _next) => {
  console.error("Unhandled error:", err);
  res.status(500).json({
    success: false,
    message: "Something went wrong while processing your request.",
  });
});

export default app;
