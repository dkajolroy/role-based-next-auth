"use client";
import { SessionProvider } from "next-auth/react";
import React from "react";
import { ToastContainer } from "react-toastify";

function Provider({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ToastContainer />
      {children}
    </SessionProvider>
  );
}

export default Provider;
