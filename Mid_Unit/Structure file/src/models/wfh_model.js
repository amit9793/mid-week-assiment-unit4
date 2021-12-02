const mongoose = require('mongoose');

const work_from_homeSchema = new mongoose.Schema(
    {
      work_from_home: { type: String, required: true },
    },
    {
      versionKey: false,
      timestamps: true,
    }
  );
module.exports = mongoose.model("work_from_home", work_from_homeSchema);
