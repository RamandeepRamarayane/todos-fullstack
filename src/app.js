import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// set cors
// app.use(cors());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" })); //limit the json size
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public")); // to store public assets
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send({ status: 200, data: "Welcome to Todo" });
});

export { app };
