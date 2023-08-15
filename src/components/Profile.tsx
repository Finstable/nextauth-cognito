"use client";
import { useSession } from "next-auth/react";

const Profile = () => {
  const { data } = useSession();
  return <div>Email: {data?.user.email}</div>;
};

export default Profile;
