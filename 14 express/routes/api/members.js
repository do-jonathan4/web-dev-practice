const express = require('express')
const router = express.Router()
const membersData = require('../../Members')

// Gets All Members
router.get('/', (req, res) => res.json(membersData))

// Get Single Member
router.get('/:id', (req, res) => {
    const found = membersData.some(member => member.id === parseInt(req.params.id))
    
    if (found) {
        res.json(membersData.filter(member => member.id === parseInt(req.params.id)))
    } else {
        res.status(400).json({msg : `No member found with id of ${req.params.id}`})
    }
})

module.exports = router