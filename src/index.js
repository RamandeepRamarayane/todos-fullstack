// require("dotenv").config();
// require("dotenv").config({path:"./.env"});
import dotenv from "dotenv";
import { connectDB } from "./db/index.js";
import { app } from "./app.js";

const _PORT = process.env.PORT || 8000;

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.listen(_PORT, () => {
      console.log(`---- Server is running at port ${_PORT} ----`);
    });
  })
  .catch((err) => {
    console.log(" !! MongoDB Connection Failed !!", err);
  });
