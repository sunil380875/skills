const express = require("express");
const mongoose = require("mongoose")
require('dotenv').config()
const app = express();

const schoolRouter = require("./routes/school.routes");
const catRouter = require("./routes/cat.routes");

app.use(express.json())


mongoose.connect(process.env.MONGO_URI).then(() => console.log("Db connection successful")).catch((err) => console.log(err))


app.use(schoolRouter);
app.use(catRouter);
const port = 3000;

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})