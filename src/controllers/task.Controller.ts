import { Request, Response, NextFunction } from "express";
import User from "../model/task.Model";

const addDate = (req: Request, res: Response, next: NextFunction) => {
  try {
    new User({ Name: { firstName: req.body.name } }).save();
   
    res.status(201).json({ message: "Created" });
  } catch (err) {
    res.status(500).json({ message: "Error", Error: err });
  }
};
export default addDate;
