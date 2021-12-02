const mongoose =  require('mongoose');

const allSchema = mongoose.Schema({

    title: {type: 'string', required: true},
    location: {type: mongoose.Schema.Types.ObjectId, ref:"locations", required: true},
    tags :  {type: mongoose.Schema.Types.ObjectId, ref:"works", required: true},
    skill: {type: mongoose.Schema.Types.ObjectId, ref:"skills", required: true}

}, {

    versionKey: false,
    timestamps: true
    
});

const all = mongoose.model('jobs', allSchema);

module.exports = all;

