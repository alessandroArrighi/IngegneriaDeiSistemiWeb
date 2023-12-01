"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const frames_router_1 = __importDefault(require("./routes/frames-router"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.static("dist-forntend"));
app.use(frames_router_1.default);
app.use(function (req, res, next) {
    res.setHeader("Content-Type", "text/plain");
    res.status(404).send("404 PAGE NOT FOUND...");
});
app.listen(port, function () {
    console.log("Listening on http://localhost:" + port);
});
