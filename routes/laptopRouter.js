import { Router } from "express";
const laptopRoute = Router();


laptopRoute.get("/", (_req, res) => {
  res.send("<h1>hello magi</h1>");
});

laptopRoute.get("/about", (_req, res) => {
  res.send("<h1>I am Magi and I am a student</h1>");
});

export default laptopRoute;
