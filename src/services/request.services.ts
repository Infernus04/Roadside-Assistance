import { RequestModel } from "../models/request.model";
import type { CreateRequest } from "../validators/request.validators";

export class RequestService {
  async createRequest(
    userId: string,
    providerId: string,
    request: CreateRequest
  ) {
    return RequestModel.create({
      userId: userId,
      providerId: providerId,
      description: request.description,
      vehicleDetails: request.vehicleDetails,
    });
  }

  async changeRequestStatus(
    _id: string,
    status: "pending" | "accepted" | "completed" | "cancelled"
  ) {
    return RequestModel.findByIdAndUpdate(
      _id,
      { status },
      { new: true }
    );
  }
}
