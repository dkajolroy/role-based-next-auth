"use client";

import { useSession } from "next-auth/react";

function Admin() {
  const { data } = useSession();
  return (
    <div className="flex-col flex mt-10 justify-center items-center">
      <div className="mb-5 text-center">
        <span className="text-xl">Protected Route For</span>
        <h2> {data?.user?.name} only</h2>
      </div>
      <h2>{data?.user?.email}</h2>
      <h2>{data?.user?.username}</h2>
      <h2>{data?.user?.role}</h2>
    </div>
  );
}

export default Admin;
