"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const task_Controller_1 = __importDefault(require("../controllers/task.Controller"));
const usersRouter = (0, express_1.Router)();
usersRouter.post('/', task_Controller_1.default);
exports.default = usersRouter;
