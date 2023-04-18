import express from "express";

const router = express.Router();

const init = (db) => {
  router.get("/", async (req, res) => {
    res.send(await db.getHumidityData());
  });
};

const getRouter = () => {
  return router;
};

export default {
  init,
  getRouter,
};
