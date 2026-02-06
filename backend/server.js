require("dotenv").config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("./config/db/db");

const app = express();

// Connect to Database
connectDB();

// Middlewares
app.use(express.json({ limit: "25mb" }));
app.use(cors());
app.use(morgan("tiny"));

// Routes
const userRoutes = require("./routes/user");
const commonRoutes = require("./routes/common");

app.use("/api/user", userRoutes);
app.use("/api", commonRoutes);

const port = process.env.PORT || 3100;
app.listen(port, () => console.log(`listening on port ${port}`));
