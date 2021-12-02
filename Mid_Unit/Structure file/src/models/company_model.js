const mongoose = require('mongoose');


const companySchema = new mongoose.Schema(
    {
      company: { type: String, required: true },
      job_ids: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "job",
          required: true,
        },
      ],
    },
    {
      versionKey: false,
      timestamps: true,
    }
  );
module.exports = mongoose.model("company", companySchema);
  