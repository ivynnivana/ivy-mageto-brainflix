const express = require("express"); //require
const cors = require("cors");
// const path = require("path");
// const logger = require("./middleware/logger");

//intialize express for use
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/videos", require("./routes/api/videos"));

// app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}...`);
});
