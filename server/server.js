const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { connectDB } = require("./connection");
const routes = require("./routes");
require("dotenv").config();

connectDB();
app.use(express.json());
app.use(cookieParser());

app.use("/api", routes);
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));

app.listen(port, () => console.log(`Server running on port ${port}`));
