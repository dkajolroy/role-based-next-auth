"use client";

import { useSession } from "next-auth/react";

function Public() {
  const { data } = useSession();
  return (
    <div className="flex-col flex mt-10 justify-center items-center">
      <div className="mb-5 text-center">
        <span className="text-xl">Protected Profile for</span>
        <h3>Any logged Roles</h3>
      </div>
      <h2>Status: {data?.user?.name}</h2>
      <h2>{data?.user?.email}</h2>
      <h2>{data?.user?.username}</h2>
      <h2>{data?.user?.role}</h2>
    </div>
  );
}

export default Public;
