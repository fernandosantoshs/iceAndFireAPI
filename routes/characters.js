const express = require('express');
const router = express.Router();
const Character = require('../models/Character');

router.get('/', async (req, res) => {
    try {
        const characters = await Character.find({});
        res.json(characters).status(200);
    } catch(err) {
        res.json({message: err});
    };
});


module.exports = router;