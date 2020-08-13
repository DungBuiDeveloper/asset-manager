const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const manufacturerAssetSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    suportUrl: {
      type: String,
      required: true
    },
    suportPhone: {
      type: String,
      required: true
    },
    suportEmail: {
      type: String,
      required: true
    },
    thumb: {
      type: String
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
)
manufacturerAssetSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('manufacturers', manufacturerAssetSchema)
