// require('dotenv').config();

import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { connectToSocket } from "./controller/socketManager.js";
import { createServer } from "node:http";
import userRoutes from "./Routes/userRoute.js";
import path from "path";
import { fileURLToPath } from "url";
import { join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.set("port", process.env.PORT || PORT);
app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));

const server = createServer(app);
const io = connectToSocket(server);

app.get("/api/v1/users", (req, res) => {
  res.sendFile(join(__dirname, "views", "index.html"));
});



app.use("/api/v1/users", userRoutes);
app.set("mongo_user");
const connectiondb = await mongoose.connect(
  "mongodb+srv://malviyasourabh124_db_user:7lO2YXo50SeWKXGN@zoom.scv1dkl.mongodb.net/?appName=Zoom",
);
console.log(`MONGO connected to HOST ${connectiondb.connection.host}`);
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
