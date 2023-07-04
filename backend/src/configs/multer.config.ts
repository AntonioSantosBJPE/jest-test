import { Request } from "express";
import multer, { FileFilterCallback } from "multer";
import { resolve } from "node:path";

const tmpFolder = resolve(__dirname, "..", "..", "tmp");

const fileSize = 1 * 1024 * 1024;

export default {
  tmpFolder,

  fileFilter: (
    request: Request,
    file: Express.Multer.File,
    callback: FileFilterCallback
  ) => {
    const acceptedTypes = file.mimetype;
    if (acceptedTypes === "text/csv") {
      callback(null, true);
    } else {
      callback(null, false);
      new Error("Only csv format alllowed");
    }
  },
  limits: {
    fileSize,
  },
  storage: multer.diskStorage({
    destination: tmpFolder,
    filename: (_, file, callback) => {
      const filename = `${file.originalname}.csv`;
      return callback(null, filename);
    },
  }),
};
