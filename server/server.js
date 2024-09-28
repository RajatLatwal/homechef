const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { connectDB } = require("./connection");
const routes = require("./routes");
require("dotenv").config();

app.use(express.json());
app.use(cookieParser());
connectDB();
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));

//mern project deploy process
// app.get("/", (req, res) => {
//   app.use(express.static(path.resolve(__dirname, "dist", "client")));
//   res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
// });

app.use("/api", routes);

app.listen(port, () => console.log(`Server running on port ${port}`));
