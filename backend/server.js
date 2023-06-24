const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const feedback = require("./routes/feedback");
const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
  methods: ["POST", "GET"],
  credential: true,
  exposedHeaders: ["Access-Control-Allow-Origin"],
};
app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("Successful response.");
});

app.use("/api", feedback);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`app is listening on port ${PORT}.`));
