const express = require('express')
const uuid = require('uuid')
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

// Create Member
router.post('/', (req, res) => {
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: 'active'
    }
    if (!newMember.name || !newMember.email) {
        return res.status(400).json({msg: 'Please include a name and email'})
    }
    membersData.push(newMember)
    res.json(membersData)
})

// Update Member
router.put('/:id', (req, res) => {
    const found = membersData.some(member => member.id === parseInt(req.params.id))

    if (found) {
        const updMember = req.body
        membersData.forEach(member => {
            if (member.id === parseInt(req.params.id)) {
                member.name = updMember.name ? updMember.name : member.name
                member.email = updMember.email ? updMember.email : member.email
                
                res.json({msg: 'Member updated: ', member})
            }
        })
    } else {
        res.status(400).json({msg : `No member found with id of ${req.params.id}`})
    }
})

// Delete Member
router.delete('/:id', (req, res) => {
    const found = membersData.some(member => member.id === parseInt(req.params.id))
    
    if (found) {
        res.json({
            msg: 'Member deleted', 
            member: membersData.filter(member => member.id !== parseInt(req.params.id))
        })
    } else {
        res.status(400).json({msg : `No member found with id of ${req.params.id}`})
    }
})

module.exports = router