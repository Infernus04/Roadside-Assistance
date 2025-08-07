import { use } from "hono/jsx";
import { UserModel } from "../models/user.model";
import type { RegisterUser , User } from "../validators/user.validators";

export class UserService {
    async getUserById(id : string){
        return UserModel.findById(id);
    }

    async createUser(user : RegisterUser, hash : string) {
        return UserModel.create({
            name : user.name,
            email : user.email,
            hash,
        });
    }

    async deleteUser(id : string){
        return UserModel.deleteOne({ _id: id });
    }
}