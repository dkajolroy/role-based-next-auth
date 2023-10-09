"use client";
import Credential from "@/components/credential";
import { signIn } from "next-auth/react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

type Props = {
  searchParams: {
    callbackUrl: string | undefined;
    error: string | undefined;
  };
};
function SignIn({ searchParams: { callbackUrl, error } }: Props) {
  useEffect(() => {
    if (error) {
      toast("Invalid Credential !", { autoClose: 5000, type: "error" });
    }
  }, [error]);

  const [activeDemo, setActiveDemo] = useState(true);
  const [inputUser, setInputUser] = useState({ username: "", password: "" });
  async function submit() {
    await signIn("credentials", {
      ...inputUser,
      callbackUrl: callbackUrl || "/",
    });
  }
  return (
    <div className="bg-slate-200 h-[calc(100vh-40px)] flex justify-center  items-center">
      <div className="md:w-1/4 relative bg-white rounded p-5">
        {activeDemo && (
          <Credential setActiveDemo={setActiveDemo} activeDemo={activeDemo} />
        )}
        <div className="flex mb-3 justify-between items-center">
          <h2>Please Login</h2>
          <button
            className="outline-none bg-teal-500 py-[6px] px-[10px] text-white hover:bg-teal-600 rounded "
            onClick={() => setActiveDemo((s) => !s)}
          >
            <IconClipboardData />
          </button>
        </div>
        <div className="flex flex-col gap-2">
          <input
            type="text"
            onKeyUp={(e) => {
              if (e.key == "Enter") {
                submit();
              }
            }}
            onChange={(e) =>
              setInputUser((s) => ({ ...s, username: e.target.value }))
            }
            placeholder="Username"
            className="py-1 px-2 outline-none rounded focus:border-slate-500 w-full border-slate-300 border"
          />
          <input
            onKeyUp={(e) => {
              if (e.key == "Enter") {
                submit();
              }
            }}
            onChange={(e) =>
              setInputUser((s) => ({ ...s, password: e.target.value }))
            }
            type="text"
            placeholder="password"
            className="py-1 px-2 outline-none rounded focus:border-slate-500 w-full border-slate-300 border"
          />
          <button
            type="submit"
            onClick={submit}
            className="outline-none bg-teal-500 rounded text-white hover:bg-teal-600 transition py-1 w-full "
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
function IconClipboardData() {
  return (
    <svg fill="currentColor" viewBox="0 0 16 16" height="1em" width="1em">
      <path d="M4 11a1 1 0 112 0v1a1 1 0 11-2 0v-1zm6-4a1 1 0 112 0v5a1 1 0 11-2 0V7zM7 9a1 1 0 012 0v3a1 1 0 11-2 0V9z" />
      <path d="M4 1.5H3a2 2 0 00-2 2V14a2 2 0 002 2h10a2 2 0 002-2V3.5a2 2 0 00-2-2h-1v1h1a1 1 0 011 1V14a1 1 0 01-1 1H3a1 1 0 01-1-1V3.5a1 1 0 011-1h1v-1z" />
      <path d="M9.5 1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5h3zm-3-1A1.5 1.5 0 005 1.5v1A1.5 1.5 0 006.5 4h3A1.5 1.5 0 0011 2.5v-1A1.5 1.5 0 009.5 0h-3z" />
    </svg>
  );
}
