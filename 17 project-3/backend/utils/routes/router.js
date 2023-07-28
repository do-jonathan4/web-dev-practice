const express = require('express')
const asyncHandler = require('express-async-handler')
const Model = require('../config/schema')
const router = express.Router()

router.get('/', asyncHandler(async (req, res) => {
    const list = await Model.find()
    res.status(200).json(list)
}))

router.post('/', asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error ('Please include text')
    }

    await Model.create({item: req.body.text})
    res.status(200).json({message: `Created item: ${req.body.text}`})
}))

router.put('/:id', asyncHandler(async (req, res) => {
    const id = await Model.findById(req.params.id)

    if (!id) {
        res.status(400)
        throw new Error (`Can not find item with ID: ${id}`)
    }
    if (!req.body.text) {
        res.status(400)
        throw new Error ('Please include text')
    }

    await Model.findByIdAndUpdate(id, {item: req.body.text})
    res.status(200).json({message: `Updated item to: ${req.body.text}`})
}))

router.delete('/:id', asyncHandler(async (req, res) => {
    const id = await Model.findById(req.params.id)

    if (!id) {
        res.status(400)
        throw new Error (`Can not find item with ID: ${id}`)
    }

    await Model.findByIdAndDelete(id)
    res.status(200).json({message: 'Deleted item successfully'})
}))

module.exports = router