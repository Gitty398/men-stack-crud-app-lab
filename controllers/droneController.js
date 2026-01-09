const Drone = require("../models/drone.js")
const express = require("express")
const router = express.Router()

// INDUCES

// Index- GET /drones- render all the drones

router.get("/drones", async (req, res) => {
    const allDrones = await Drone.find()
    res.render("drones/index.ejs", { allDrones })
});

// New - GET /dones/new - render new drone form

router.get("/drones/new", (req, res) => {
    res.render("drones/new.ejs")
});

// Delete- DELETE /drones/:droneId - Delete a specific drone from the DB

router.delete("/drones/:droneId", async (req, res) => {
    await Drone.findByIdAndDelete(req.params.droneId)
    res.redirect("/drones")
})


// Update- PUT /drones/droneId (req.body) - Update a specific drone using rec.body

router.put("/drones/:droneId", async (req, res) => {
    req.body.isCommercial = req.body.isCommercial === "on" ? true : false
    await Drone.findByIdAndUpdate(req.params.droneId, req.body)
    res.redirect(`/fruits/${req.params.droneId}`);
})


// Create- POST / drones - Use the req.body to create a new drone

router.post("/drones", async (req, res) => {
    req.body.isCommercial = req.body.isCommercial === "on" ? true : false
    await Drone.create(req.body)
    console.log(req.body)
    res.redirect("/drones")
})


// Edit- GET /drones/:droneId/edit- render a pre-populated drone from the DB

router.get("/drones/:droneId/edit", async (req, res) => {
    const drone = await Drone.findById(req.params.droneId)
    res.render("drones/edit.ejs", { drone })
})



// Show= GET /drones/:droneId - Render a specific drone from the DB

router.get("/drones/:droneId", async (req, res) => {
    const drone = await Drone.findOne({ _id: req.params.droneId })
    res.render("drones/show.ejs", { drone })
})

module.exports = router;