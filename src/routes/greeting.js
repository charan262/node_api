const express = require('express');
const router = express.Router();

router.get('/',(req,res) => {
    res.send('Welcome!')
});
router.get('/user',(req,res) => {
    res.send('Hello User!')
});

module.exports = router;