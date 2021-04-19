const express = require("express")
const router = express.Router()
const User = require("../models/user")

router.get("/", async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (error) {
        res.send("Error : "+ error)
    }
})

router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        res.json(user)
    } catch (error) {
        res.send("Error : "+ error)
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        res.send(user.name + " is deleted")
    } catch (error) {
        res.send("Error : "+ error)
    }
})

router.patch("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        user.gender = req.body.gender
        const ModifiedUser = await user.save()
        res.send(ModifiedUser.name + " is modified")
    } catch (error) {
        res.send("Error : "+ error)
    }
})


router.post('/', async(req, res) => {
    // console.log(req.body)
    const user = new User({
        name: req.body.name,
        skill: req.body.skill,
        gender: req.body.gender
    })

    try {
        const a1 = await user.save()
        res.json(a1)
    } catch (err) {
        res.send("Not Saved : "+err)
    }
})
module.exports = router