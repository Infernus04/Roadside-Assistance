import {z} from 'zod';

export const userSchema = z.object({
    name : z.string().min(1, 'Name is required'),
    email : z.email(),
    password : z.string().min(6, 'Password must be at least 6 characters long'),
    description : z.string().optional(),
    vehicleDetails : z.string()
})

export type User = z.infer<typeof userSchema>;

export const providerRegisterSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.email(),
    password: z.string().min(6, 'Password must be at least 6 characters long'),
    serviceType : z.string().min(1, 'Service type is required'),
})

export type ProviderRegister = z.infer<typeof providerRegisterSchema>;

export const registeruserSchema = z.object({
    email : z.email(),
    name : z.string().min(3, 'Name must be at least 3 characters long'),
    password : z.string().min(6, 'Password must be at least 6 characters long').regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/, 'Password must contain at least one uppercase letter, one lowercase letter, and one number'),

})

export type RegisterUser = z.infer<typeof registeruserSchema>;

export const loginSchema = z.object({
    email : z.email(),
    password : z.string().min(6, 'Password must be at least 6 characters long'),
})

export type LoginUser = z.infer<typeof loginSchema>;

export const searchUserSchema = z.object({
    search : z.string().min(3)
})