const express = require('express');
const router = express.Router();
const PovCharacter = require('../models/PovCharacters');

router.get('/', async (req, res) => {
    try {
        const povCharacters = await PovCharacter.find({});
        res.json(povCharacters).status(200);
    } catch(err) {
        res.json({message: err});
    };
});


module.exports = router;