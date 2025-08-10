import * as jwt from 'hono/jwt';

export const getPasswordKey = async (password : string) => {
    const hash = await Bun.password.hash(password);
    return {hash};
    //Curly braces are used to return an object with a property named 'hash'
    //Otherwise it would return the hash directly
}

export const validatePassword = async(password : string , hash : string) => {
    return await Bun.password.verify(password, hash);
    //Returns true if the password matches the hash, false otherwise
}

export const generateJWt = async (data : IJWTData) : Promise<string> => {
    const expiry = Math.floor(Date.now()/1000) + 60 * 5 * 24 * 60; // 5 days in seconds
    return await jwt.sign({...data, exp : expiry}, process.env.JWT_SECRET!);
    //Generates a JWT token with the provided data and an expiry time of 5 days
}

export const verifyJWT = async (token: string): Promise<IJWTData > => {
    const data = await jwt.verify(token, process.env.JWT_SECRET!);
    return data as unknown as IJWTData;
}