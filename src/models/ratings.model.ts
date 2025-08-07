import mongoose, { Types } from "mongoose";
import { IRating } from "../interfaces/ratings.interface";

const ratingSchema = new mongoose.Schema({
  userId: { types: mongoose.Types.ObjectId, ref: "User", required: true },
  providerId: {
    types: mongoose.Types.ObjectId,
    ref: "Provider",
    required: true,
  },
  requestId: { types: mongoose.Types.ObjectId, ref: "Request", required: true },
  rating: {
    type: Number,
  },
  Comment: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const RatingsModel = mongoose.model<IRating>("Rating", ratingSchema);