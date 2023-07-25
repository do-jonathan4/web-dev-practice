const express = require('express')
const asyncHandler = require('express-async-handler')
const router = express.Router()

router.get('/', asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Hello'})
}))
router.post('/', asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Hello'})
}))
router.put('/:id', asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Hello'})
}))
router.delete('/:id', asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Hello'})
}))

module.exports = router