import { Schema } from 'mongoose';

const mongoose = require('mongoose');

export interface CostModel {
  type: string;
  pricePerKilogram: number;
}

module.exports = function () {
  const CostSchema = new Schema<CostModel>({
    type: {
      type: String,
      required: true,
      unique: true,
      default: TrashTypes.MIXED,
      enum: Object.values(TrashTypes),
    },
    pricePerKilogram: { type: Number, required: true },
  });
  return mongoose.model('OperatorNotification', CostSchema);
};
