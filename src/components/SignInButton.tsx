"use client";

import { signIn } from "next-auth/react";

const SignInButton = () => {
  return (
    <div>
      <button
        onClick={() => signIn("cognito", { callbackUrl: "/" })}
        className="bg-blue-400 p-2 text-white rounded-md hover:bg-blue-500 w-full"
      >
        Sign in
      </button>
    </div>
  );
};

export default SignInButton;
