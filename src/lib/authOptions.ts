import { NextAuthOptions } from "next-auth";
import CognitoProvider from "next-auth/providers/cognito";

export const authOptions: NextAuthOptions = {
  providers: [
    CognitoProvider({
      clientId: process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID || "",
      clientSecret: process.env.NEXT_PUBLIC_COGNITO_CLIENT_SECRET || "",
      issuer: process.env.NEXT_PUBLIC_COGNITO_ISSUER,
      checks: ["state", "pkce", "nonce"],
      idToken: true,
    }),
  ],
  secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET,

  callbacks: {
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async session({ session, user, token }) {
      session.user.id = token.id as number;
      session.user.accessToken = token.accessToken as string;
      session.user.idToken = token.idToken as string;
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      return token;
    },
  },
};
