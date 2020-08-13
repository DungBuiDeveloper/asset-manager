const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const categoryAssetSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true,
      enum: ['accessory', 'asset', 'consumable', 'component', 'license']
    },
    thumb: {
      type: String
    },
    note: {
      type: String
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
)
categoryAssetSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('categories', categoryAssetSchema)
