const asyncHandler = require('express-async-handler')
const Model = require('../model/schema')

const getItems = asyncHandler(async (req, res) => {
    const list = await Model.find()
    res.status(200).json(list)
})

const postItems = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error ('Please include text')
    }

    await Model.create({item: req.body.text})
    res.status(200).json({message: `Created item: ${req.body.text}`})
})

const putItems = asyncHandler(async (req, res) => {
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
})

const deleteItems = asyncHandler(async (req, res) => {
    const id = await Model.findById(req.params.id)

    if (!id) {
        res.status(400)
        throw new Error (`Can not find item with ID: ${id}`)
    }

    await Model.findByIdAndDelete(id)
    res.status(200).json({message: 'Deleted item successfully'})
})

module.exports = {
    getItems,
    postItems,
    putItems,
    deleteItems
}