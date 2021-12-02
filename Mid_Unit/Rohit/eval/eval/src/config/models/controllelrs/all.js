const  express = require('express');
const router = express.Router();

const jobs = require('../all-model');

router.post('', async (req, res) =>{
    const all = await jobs.create(req.body);
    return res.status(200).send({all});
});

router.get('', async (req, res) =>{
    const all = await jobs.find().populate('location').populate('tags').populate('skill');
    return res.status(200).send({all});
});

router.get('/:id', async (req, res) =>{
    const particular = await jobs.findById(req.params.id).populate('location').populate('tags').populate('skill').lean().exec();
    return res.status(200).send({particular});
})

module.exports = router;

