const express = require("express");
const { connectDatabase } = require("./db");
const userRouter = require("./routes/userRoutes");
const bodyParser = require("body-parser");
const app = express();

// connection
connectDatabase();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes
app.use("/api/user", userRouter);

app.listen(2000, () => {
  console.log(`server is working on 2000`);
});
