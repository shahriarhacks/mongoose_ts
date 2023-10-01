import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";

const app: Application = express();
const port: number = 5000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

async function makeDBconnect() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/for-practice");
    console.log(`DB connected successful`);
  } catch (error) {
    console.log(`Failed to connect DB ${error}`);
  }
}
makeDBconnect();

app.get("/health", (_req: Request, res: Response, _next: NextFunction) => {
  res.status(200).json({
    statusCode: res.statusCode,
    status: "Success",
    request: true,
    data: [],
  });
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
