const express = require("express");
const app = express();
const Drone = require("./models/drone");
const morgan = require("morgan")
const methodOverride = require("method-override")
const droneController = require("./controllers/droneController")

// Middleware

require("./db/connection");
// allows app to use form data- adds form data to req.body
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"))
app.use(methodOverride("_method"))
app.use(express.static("public"));


// Routes
// Landing Page

app.get("/", async (req, res) => {
    res.render("index.ejs");
})

app.use(droneController)

app.get("/*splat", (req, res) => {
    res.render("404.ejs", { url: req.url });
});



app.listen(3000, () => {
    console.log("Got Drones on 3000")
})

