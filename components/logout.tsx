"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

function Logout() {
  const { status } = useSession();
  return (
    <>
      {status === "authenticated" ? (
        <button
          className="py-2 px-5 hover:bg-teal-500 hover:text-white"
          onClick={() => signOut()}
        >
          Logout
        </button>
      ) : (
        <Link
          className="py-2 px-5 hover:bg-teal-500 hover:text-white"
          href="/signin"
        >
          Login
        </Link>
      )}
    </>
  );
}

export default Logout;
