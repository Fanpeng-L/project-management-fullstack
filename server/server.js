const express = require("express");
require("dotenv").config();
const { createHandler } = require("graphql-http/lib/use/express");
const port = process.env.PORT || 5000;

const app = express();

app.listen(port, console.log(`Server running at port ${port}`));
