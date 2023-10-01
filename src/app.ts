import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/health", (_req: Request, res: Response, _next: NextFunction) => {
  res.status(200).json({
    statusCode: res.statusCode,
    status: "Success",
    request: true,
    data: [],
  });
});

export default app;
