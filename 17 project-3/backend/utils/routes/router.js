const express = require('express')
const asyncHandler = require('express-async-handler')
const Model = require('../config/schema')
const router = express.Router()

router.get('/', asyncHandler(async (req, res) => {
    const list = await Model.find()
    res.status(200).json(list)
}))
router.post('/', asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Hello'})
}))
router.put('/:id', asyncHandler(async (req, res) => {
    const task = await Model.findById(req.params.id)
    res.status(200).json({message: 'Hello'})
}))
router.delete('/:id', asyncHandler(async (req, res) => {
    const task = await Model.findById(req.params.id)
    res.status(200).json({message: 'Hello'})
}))

module.exports = router