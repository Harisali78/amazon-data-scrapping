require("dotenv").config();
const express = require("express");
const router = require("./routes/scrappingRoute");
const app = express();
const port = process.env.PORT;

// Middleware
app.use("/api/v1", router);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
