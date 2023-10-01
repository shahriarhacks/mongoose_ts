import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import userRouter from "./app/modules/user/user.router";
const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", userRouter);

app.get("/health", (_req: Request, res: Response, _next: NextFunction) => {
  res.status(200).json({
    statusCode: res.statusCode,
    status: "Success",
    request: true,
    data: [],
  });
});

export default app;
