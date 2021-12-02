const mongoose = require('mongoose');


const skillSchema = new mongoose.Schema(
    {
      skill_name: { type: String, required: true },
    },
    {
      versionKey: false,
      timestamps: true,
    }
  );
module.exports = mongoose.model("skill", skillSchema);
  