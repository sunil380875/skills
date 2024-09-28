const express = require("express");
const mongoose = require("mongoose")
const app = express();

const schoolRouter = require("./routes/school.routes")

app.use(express.json())

const MONGO_URI = 'mongodb+srv://skm:A1FAVzNsY8X6zZ9Q@cluster0.whghyhm.mongodb.net/skills';

mongoose.connect(MONGO_URI).then(() => console.log("Db connection successful")).catch((err) => console.log(err))


app.use(schoolRouter);
const port = 3000;

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})