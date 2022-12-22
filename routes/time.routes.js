const { Router } = require('express')
const db = require("../models");
const Time = db.times;
const auth = require('../middleware/auth.middleware.js')
const router = Router()

router.post("/create", auth, async (req, res) => {
    try {
        const { project, hours, description } = req.body
        const existing = await Time.findOne({ project, hours, description })
        if (existing) {
            return res.json({ time: existing })
        }

        const time = new Time({
            project, hours, description, owner: req.user.userId
        })
        await time.save()

        res.status(201).json({ time })

    } catch (e) {
        res.status(500).json({ message: 'Something is not right, try again' })
    }
});
router.get("/", auth, async (req, res) => {
    try {
        const times = await Time.find({ owner: req.user.userId })
        res.json(times)
    } catch (e) {
        res.status(500).json({ message: 'Something is not right, try again' })
    }
});
router.get("/:id", auth, async (req, res) => {
    try {
        const times = await Time.findById(req.params.id)
        res.json(times)
    } catch (e) {
        res.status(500).json({ message: 'Something is not right, try again' })
    }
});
router.delete("/:id", auth, async (req, res) => {
    try {
        const times = await Time.findByIdAndRemove({ _id: req.params.id })
        res.json(times)
    } catch (e) {
        res.status(500).json({ message: 'Something is not right, try again' })
    }
})

module.exports = router;