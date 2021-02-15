const dotenv = require("dotenv");
// init of dotenv
dotenv.config();
const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/Users");
const productRoutes = require("./routes/Products");
const app = express();

const { PORT } = process.env || 3000;

// parsing the body to make the body accessible
// json format
app.use(bodyParser.json());
// urlencoded format
app.use(bodyParser.urlencoded({ extended: true }));

// routes
app.use("/users", userRoutes);
app.use("/products", productRoutes);

app.listen(PORT, () => console.log(`server is running on ${PORT}`));
