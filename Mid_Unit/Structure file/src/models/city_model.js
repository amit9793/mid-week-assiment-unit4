const mongoose = require('mongoose');


const CitySchema = new mongoose.Schema(
    {
      city_name: { type: String, required: true },
    },
    {
      versionKey: false,
      timestamps: true,
    }
  );
  module.exports = mongoose.model("city", CitySchema);
