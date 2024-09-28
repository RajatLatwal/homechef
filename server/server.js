const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { connectDB } = require("./connection");
const routes = require("./routes");
const path = require("path");
require("dotenv").config();

connectDB();
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(cookieParser());

//mern project deploy process
// app.get("/", (req, res) => {
//   app.use(express.static(path.resolve(__dirname, "dist", "client")));
//   res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
// });

app.use("/api", routes);

app.listen(port, () => console.log(`Server running on port ${port}`));
