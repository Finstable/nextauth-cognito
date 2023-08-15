import withAuth from "next-auth/middleware";

export default withAuth({
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    authorized: async ({ token }) => {
      if (!token?.idToken) {
        return false;
      }
      return true;
    },
  },
  pages: {
    signIn: "/signin",
  },
});
