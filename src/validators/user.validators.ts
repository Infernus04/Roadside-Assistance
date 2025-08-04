import { password } from 'bun';
import {email, z} from 'zod';

export const userSchema = z.object({
    name : z.string().min(1, 'Name is required'),
    email : z.email(),
    password : z.string().min(6, 'Password must be at least 6 characters long'),
})

export type User = z.infer<typeof userSchema>;

export const providerRegisterSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.email(),
    password: z.string().min(6, 'Password must be at least 6 characters long'),
    serviceType : z.string().min(1, 'Service type is required'),
})

export type ProviderRegister = z.infer<typeof providerRegisterSchema>;
