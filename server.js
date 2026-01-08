const express = require("express");
const app = express();
const Drone = require("./models/drone");

// Middlewares
require("./db/connection");
// allows app to use form data- adds form data to req.body
app.use(express.urlencoded({ extended: true }));

// Routes
// Landing Page

app.get("/", async (req, res) => {
    res.render("index.ejs");
})

// INDUCES

// Index- GET /drones- render all the drones

app.get("/drones", async (req, res) => {
    const allDrones = await Drone.find()
    res.render("drones/index.ejs", { allDrones })
});

// New - GET /dones/new - render new drone form

app.get("/drones/new", (req, res) => {
    res.render("drones/new.ejs")
})

// Delete- DELETE /drones/:droneId - Delete a specific drone from the DB




// Update- PUT /drones/droneId (req.body) - Update a specific drone using rec.body

// Create- POST / drones - Use the req.body to create a new drone

app.post("/drones", async (req, res) => {
    req.body.isCommercial = req.body.isCommercial === "on" ? true : false
    await Drone.create(req.body)
    console.log(req.body)
    res.redirect("/drones")
})


// Edit- GET /drones/:droneId/edit- render a pre-populated drone from the DB

// Show= GET /drones/:droneId - Render a specific drone from the DB


app.listen(3000, () => {
    console.log("Got Drones on 3000")
})

