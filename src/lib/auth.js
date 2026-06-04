import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import CredentialsProvider from "next-auth/providers/credentials";

import { getUserByEmail } from "@/queries/getUser";
import bcrypt from "bcryptjs"; // Ensure you're using bcryptjs for promises

import { createUser } from "@/queries/createUser";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  session: {
    strategy: "jwt",
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
        //   console.log("Fetched user:", user);

          if (!user) {
            throw new Error("User not found");
          }

          const isMatch = await bcrypt.compare(
            credentials.password,
            user.password
          ); // ✅ hash comparison
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

  callbacks: {
      async signIn({ user, account, profile }) {
          if (account.provider === "google") {
          const existingUser = await getUserByEmail(profile.email);

        if (!existingUser) {
          const hashedPassword = await bcrypt.hash(
            Math.random().toString(36).slice(-8),
            10
          );

          await createUser({
            name: profile.name,
            email: profile.email,
            password: hashedPassword,
            role: "user",
          });

          console.log("✅ Google user created in DB");
        }
      }
      return user;
    },

    async session({ session, token }) {
      // Inject into session.user
      if(!token.email){
        return null
      }
      const user = await getUserByEmail(token.email)
      
      session.user.id = user._id;
      session.user.role = user.role;
      session.user.token = token?.jti;
      return session;
    },
  },
});