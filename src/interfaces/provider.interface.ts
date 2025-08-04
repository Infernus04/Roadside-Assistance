import { Document } from "mongoose";

export interface IProvider extends Document{
    name: string;
    email: string;
    password: string;
    serviceType: string;
    isAvailable?: boolean;
    ratings?: {
        average: number;
        count: number;
    };
}