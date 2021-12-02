const  express = require('express');
const router = express.Router();

const skills = require('../skill-model');

router.post('', async (req, res) =>{
    const all = await skills.create(req.body);
    return res.status(200).send({all});
});

router.get('', async (req, res) =>{
    const all = await skills.find().lean().exec();
    return res.status(200).send({all});
});

router.get('/:id', async (req, res) =>{
    const particular = await skills.findById(req.params.id).populate('title').populate('tags').lean().exec();
    return res.status(200).send({particular});
})

module.exports = router;

