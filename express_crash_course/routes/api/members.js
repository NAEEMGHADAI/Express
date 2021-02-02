const { Router } = require('express');
const express = require('express');
const uuid = require("uuid")
const router = express.Router();
const members = require('../../Members')

//Gets all Members
router.get("/", (req, res) => {
    res.json(members);
})

//Get Single Member
router.get("/:id", (req, res) => {

    //found checks the req made is present in members
    const found = members.some(members => members.id === parseInt(req.params.id))

    if (found) {
        //this line will work if found is TRUE
        res.json(members.filter(members => members.id === parseInt(req.params.id)));
    }
    else {
        //Status function can change the status from 200 from 400 if id is wrong
        res.status(400).json({ msg: `No Member with id of ${req.params.id}` })
    }
    
});

//Create Member
router.post("/", (req, res) => {
    //res.send(req.body)
    const newMember = {
        //id: uuid.v4():- Generates random id
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: 'active'
    }

    //Checks if name and email in put request is properly filled
    if (!newMember.name || !newMember.email) {
        return res.status(400).json({ msg: "Please include a name and email" })
    }
    
    //this adds new member
    members.push(newMember);
    //res.json(members);

    res.redirect("/")

});

// Update Member
router.put("/:id", (req, res) => {

    //found checks the req made is present in members
    const found = members.some(members => members.id === parseInt(req.params.id))

    if (found) {
        //this line will work if found is TRUE
        const updMember = req.body;
        members.forEach(members => {
            if (members.id === parseInt(req.params.id)) {
                members.name = updMember.name ? updMember.name : members.name;
                members.email = updMember.email ? updMember.email : members.email;
                
                res.json({ msg: "Member Updated", members})
            }
        })
    }
    else {
        //Status function can change the status from 200 from 400 if id is wrong
        res.status(400).json({ msg: `No Member with id of ${req.params.id}` })
    }
    
});

//Delete Member
router.delete("/:id", (req, res) => {

    //found checks the req made is present in members
    const found = members.some(members => members.id === parseInt(req.params.id))

    if (found) {
        //this line will work if found is TRUE
        res.json({
            msg: "Member deleted",
            //Printing all members other than deleted member which was metioned in url
            members: members.filter(members => members.id !== parseInt(req.params.id))
        })
    }
    else {
        //Status function can change the status from 200 from 400 if id is wrong
        res.status(400).json({ msg: `No Member with id of ${req.params.id}` })
    }
    
});


module.exports = router;