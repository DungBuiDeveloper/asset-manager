const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const modelAssetSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    manufacturer_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'manufacturers',
      required: true
    },
    category_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'categories',
      required: true
    },
    model_no: {
      type: String,
      required: true,
      unique: true
    },
    depreciation: {
      type: String,
      required: true,
      enum: [
        'Do Not Depreciate',
        'Computer Depreciation',
        'Display Depreciation',
        'Mobile Phone Depreciation'
      ]
    },
    EOL: {
      type: Number,
      min: 1,
      max: 12
    },
    note: {
      type: String
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
modelAssetSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('models', modelAssetSchema)
