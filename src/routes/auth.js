import express from 'express';
const router = express.Router();

router.get('/auth',(req,res) => {
    res.send('Login here!!')
});

module.exports = router;