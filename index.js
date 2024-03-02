// API USED - https://v2.jokeapi.dev/
import express from "express";
import axios from "axios";

const port = 3000;
const app = express();

// Selecting express file system
app.use(express.static("public"));

// To get the data from API using axios
app.get("/", async (req, res) => {
  const result = await axios.get("https://v2.jokeapi.dev/joke/Any?type=single");
  try {
    res.render("index.ejs", {
      joke: result.data.joke,
      type: result.data.category,
    });
  } catch (error) {
    console.log(error.response.data);
    res.status(500);
  }
});

// Redirecting to web app port
app.listen(port, () => {
  console.log(`Server running on: ${port}`);
});
