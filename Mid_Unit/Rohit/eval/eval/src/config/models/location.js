const mongoose =  require('mongoose');
const locationSchema = mongoose.Schema({
    
    location: {type: 'string', required: true},
    job: {type: mongoose.Schema.Types.ObjectId, ref:"jobs"},
    tags :  {type: mongoose.Schema.Types.ObjectId, ref:"works"}

}, {
    versionKey: false,
    timestamps: true
});

const location = mongoose.model('locations', locationSchema);

module.exports = location;

