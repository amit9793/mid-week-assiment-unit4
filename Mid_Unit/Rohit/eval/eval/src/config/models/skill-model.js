const mongoose =  require('mongoose');
const typeSchema = mongoose.Schema({
    
    skill: {type: 'string', required: true},
    location: {type: mongoose.Schema.Types.ObjectId, ref:"locations"},
    tags :  {type: mongoose.Schema.Types.ObjectId, ref:"works"},
    title :  {type: mongoose.Schema.Types.ObjectId, ref:"jobs"}

}, {
    versionKey: false,
    timestamps: true
});

const all = mongoose.model('skills', typeSchema);

module.exports = all;

