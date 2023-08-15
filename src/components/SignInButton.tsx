"use client";

import { signIn } from "next-auth/react";

const SignInButton = () => {
  return (
    <div>
      <button
        onClick={() => signIn("cognito")}
        className="bg-gray-200 p-2 rounded-md"
      >
        Sign in
      </button>
    </div>
  );
};

export default SignInButton;
