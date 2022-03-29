import express, { Application, Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import usersRouter from "./Router/task.routes";
import * as dotenv from "dotenv";

dotenv.config();
const app: Application = express();
const PORT = process.env.PORT;
mongoose
  .connect(`${process.env.LOCAL_DATABAES}`, {})
  .then(() => {
    console.log("connected DataBases");
  })
  .catch((err) => {
    console.log("connected DataBases error", err.message);
  });

app.get("/", (req: Request, res: Response) => {
  res.send("ok");
});

app.use(express.json())
app.use(usersRouter);
app.listen(PORT, () => console.log("server is run ", PORT));
