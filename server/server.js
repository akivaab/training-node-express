require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.DB_URI, { dbName: "CrudBlogDB" });

const app = express();

app.use(cors());

app.use(express.json());

app.use("/posts", require("./routes/postsRoute"));

app.listen(PORT);
