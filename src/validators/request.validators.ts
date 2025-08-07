import {z} from "zod"

export const requestSchema = z.object({
    _id : z.string(),
    userId : z.string().min(1, "User ID is required"),
    providerId : z.string().min(1, "Provider ID is required"),
    status : z.enum(["pending", "accepted", "completed", "cancelled"]).default("pending"),
    availability : z.boolean().default(true),
})

export type Request = z.infer<typeof requestSchema>;

export const createRequestSchema = z.object({
    userId : z.string().min(1, "User ID is required"),
    providerId : z.string().min(1, "Provider ID is required"),
    description : z.string().min(1, "Description is required"),
    vehicleDetails : z.string().min(1, "Vehicle details are required"),
})

export type CreateRequest = z.infer<typeof createRequestSchema>;

export const updateRequestSchema = z.object({
    reqId : z.string(),
    status : z.enum(["pending", "accepted", "completed", "cancelled"])
})

export type UpdateRequest = z.infer<typeof updateRequestSchema>;