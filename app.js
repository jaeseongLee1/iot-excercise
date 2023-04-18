import DB from "./db/db.js";

import express from "express";
import humidityRouter from "./routes/humidity.js";

const PORT = 8080;

const db = new DB({
  host: "localhost",
  user: "root",
  password: "",
  database: "test_db",
});

const app = express();

humidityRouter.init(db);
app.use(express.json());
app.use("/humidity", humidityRouter.getRouter());

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
