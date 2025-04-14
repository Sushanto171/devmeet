import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import CredentialsProvider from "next-auth/providers/credentials";

import { getUserByEmail } from "@/queries/getUser";
import bcrypt from 'bcryptjs';  // Ensure you're using bcryptjs for promises


export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut,
} = NextAuth({
    session: {
        strategy: 'jwt',
      },
    providers: [

        CredentialsProvider({
            credentials: {
                email: {},
                password: {},
            },
            async authorize(credentials) {
                if (!credentials) return null;
            
                try {
                    const user = await getUserByEmail(credentials.email); // ✅ await here
                    console.log('Fetched user:', user);
            
                    if (!user) {
                        throw new Error("User not found");
                    }
            
                    const isMatch =  bcrypt.compare(credentials.password, user.password); // ✅ hash comparison
                    if (!isMatch) {
                        throw new Error("Email or Password is not correct");
                    }
            
                    return user;
                } catch (error) {
                    console.error("Auth error:", error);
                    throw new Error("Authentication failed");
                }
            },
        }),
        
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID, 
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code",
                },
            },
        }),



       
    ],

});