import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import helmet from "helmet";
import clientRoutes from "./routes/clientRoute.js";
import generalRoutes from "./routes/generalRoute.js";
import managementRoutes from "./routes/managementRoute.js";
import salesRoutes from "./routes/salesRoute.js";
import User from "./models/userModel.js";
// data imported
import { dataUser } from "./data/index.js";
// configurations
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Routes
app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);
app.use("/sales", salesRoutes);

//mongoose setup
const PORT = process.env.PORT;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
    // user data
    // User.insertMany(dataUser);
  })
  .catch((error) => console.log(`${error} did not connected`));
