const mongoose = require('mongoose');


const jobSchema = new mongoose.Schema(
    {
      post_name: { type: String, required: true },
      skill_ids: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "skill",
          required: true,
        },
      ],
      city_ids: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "city",
          required: true,
        },
      ],
      work_from_home_ids: 
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "work_from_home",
          required: true,
        },
      rating_ids:
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "rating",
        required: true,
      }  
    },
    {
      versionKey: false,
      timestamps: true,
    }
);

module.exports = mongoose.model("job", jobSchema);
  