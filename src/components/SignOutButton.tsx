"use client";

import { signOut } from "next-auth/react";

const SignOutButton = () => {
  return (
    <div>
      <button onClick={() => signOut()} className="bg-gray-200 p-2 rounded-md">
        Sign out
      </button>
    </div>
  );
};

export default SignOutButton;
