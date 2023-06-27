"use client";
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

  const [inputUser, setInputUser] = useState({ username: "", password: "" });
  async function submit() {
    await signIn("credentials", {
      ...inputUser,
      callbackUrl: callbackUrl || "/",
    });
  }
  return (
    <div className="bg-slate-200 h-screen flex justify-center items-center">
      <div className="md:w-1/4 bg-white rounded p-5">
        <h2 className="mb-3">Login </h2>
        <div className="flex flex-col gap-2">
          <input
            type="text"
            onChange={(e) =>
              setInputUser((s) => ({ ...s, username: e.target.value }))
            }
            placeholder="Username"
            className="py-1 px-2 outline-none rounded focus:border-slate-500 w-full border-slate-300 border"
          />
          <input
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
