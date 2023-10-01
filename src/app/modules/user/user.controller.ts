import { NextFunction, Request, Response } from "express";
import { createUserToDB } from "./user.services";

export const createUser = async (
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  try {
    const data = req.body;
    const user = await createUserToDB(data);
    res.status(200).json({
      statusCode: res.statusCode,
      status: "Success",
      request: true,
      data: user,
    });
  } catch (error) {
    res.status(404).json({
      statusCode: res.statusCode,
      status: "Unsuccess",
      request: false,
      data: error,
    });
  }
};
