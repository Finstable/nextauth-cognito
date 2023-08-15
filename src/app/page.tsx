import Profile from "@/components/Profile";
import SignOutButton from "@/components/SignOutButton";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <Profile />
      <Link href={"/signin"} className="underline">
        Go to sign in
      </Link>
      <SignOutButton />
    </div>
  );
}
