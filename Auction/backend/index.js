require("dotenv").config();
const express = require("express");
const app = express();
const cors = require('cors');
const connection = require("./db");

connection();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 7000;
app.listen(port, () => console.log(`Backend server connected successfully on port ${port}`));
