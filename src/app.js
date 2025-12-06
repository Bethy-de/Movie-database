const express = require("express");
const moviesRoute = require("./routes/movies");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to the Movie Database API!");
});

app.use("/movies", moviesRoute);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
