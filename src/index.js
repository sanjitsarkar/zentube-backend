const express = require("express");
require("dotenv").config();
const connectMongo = require("./config/index.js");
const { authRoutes, categoryRoutes } = require("./api/routes");
const { auth } = require("./api/middlewares/");
const app = express();
const PORT = 5000 || process.env.PORT;

connectMongo(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/auth", authRoutes);
app.use("/api/categories", categoryRoutes);
app.get("/welcome", auth, (req, res) => {
  res.send("Welcome");
});
