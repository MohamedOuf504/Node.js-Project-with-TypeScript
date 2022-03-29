"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const task_Model_1 = __importDefault(require("../model/task.Model"));
const addDate = (req, res, next) => {
    try {
        new task_Model_1.default({ firstName: req.body.name }).save();
        res.status(201).json({ message: "Created" });
    }
    catch (err) {
        res.status(500).json({ message: "Error", Error: err });
    }
};
exports.default = addDate;
