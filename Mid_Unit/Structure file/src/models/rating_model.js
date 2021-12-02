const mongoose = require('mongoose');


  const ratingSchema = new mongoose.Schema(
    {
      rating: { type: String, required: true },
    },
    {
      versionKey: false,
      timestamps: true,
    }
  );
  module.exports = mongoose.model("rating", ratingSchema);
