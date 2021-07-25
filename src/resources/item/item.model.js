import mongoose from 'mongoose'
const ObjectId = mongoose.Schema.Types.ObjectId

const itemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50
    },
    status: {
      type: String,
      default: 'active',
      enum: ['active', 'complete', 'pastdue'],
      required: true
    },
    notes: String,
    due: Date,
    createdBy: {
      type: ObjectId,
      ref: 'user',
      required: true
    },
    list: {
      type: ObjectId,
      ref: 'list',
      required: true
    }
  },
  { timestamps: true }
)
export const Item = mongoose.model('item', itemSchema)
