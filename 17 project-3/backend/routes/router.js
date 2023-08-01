const express = require('express')
const router = express.Router()

const {
    getItems,
    postItems,
    putItems,
    deleteItems
} = require('../controller/controllers')

router.route('/').get(getItems).post(postItems)
router.route('/:id').put(putItems).delete(deleteItems)

module.exports = router