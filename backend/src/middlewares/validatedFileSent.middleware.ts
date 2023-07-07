import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";

export const validatedFileSentMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { file } = req;

  if (!file) {
    throw new AppError("No files uploaded", 400);
  }

  next();
};
