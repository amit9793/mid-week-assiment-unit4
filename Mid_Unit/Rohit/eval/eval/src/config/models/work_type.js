const mongoose =  require('mongoose');
const typeSchema = mongoose.Schema({

    from: {type: 'string', required: true},
    location: {type: mongoose.Schema.Types.ObjectId, ref:"locations", required: true},
    title :  {type: mongoose.Schema.Types.ObjectId, ref:"jobs", required: true}

}, {
    versionKey: false,
    timestamps: true
});

const all = mongoose.model('works', typeSchema);

module.exports = all;

