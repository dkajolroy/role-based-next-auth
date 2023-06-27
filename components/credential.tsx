"use client";
import copy from "copy-to-clipboard";
import { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";
import IconCopy from "./IconCopy";
import { users } from "./dummy";

interface Props {
  activeDemo: boolean;
  setActiveDemo: Dispatch<SetStateAction<boolean>>;
}
function Credential({ setActiveDemo }: Props) {
  return (
    <div className="bg-white rounded shadow w-4/5 absolute md:-left-[100%] md:translate-x-0 left-[50%] z-50  top-50% translate-y-[-50%] translate-x-[-50%]">
      <div className="relative">
        <button
          onClick={() => setActiveDemo(false)}
          className="absolute right-2 top-2  bg-teal-500 py-1 px-2 text-white hover:bg-teal-600 rounded "
        >
          <IconClose />
        </button>
      </div>
      <div className="grid grid-cols-1 items-center  p-5">
        {users.map((item, i) => (
          <div className="my-1" key={i}>
            <h2>{item.name}</h2>
            <div className="flex flex-col gap-1  bg-slate-200 px-2 rounded">
              <div className="flex gap-2 items-center justify-between">
                <span className="text-sm">username: {item.username}</span>
                <button
                  onClick={() => {
                    copy(item.username);
                    toast(`copped  ==> ${item.username}`, {
                      type: "success",
                      autoClose: 3000,
                    });
                    setActiveDemo(false);
                  }}
                >
                  <IconCopy />
                </button>
              </div>
              <div className="flex gap-2 items-center justify-between">
                <span className="text-sm">password: {item.password}</span>
                <button
                  onClick={() => {
                    copy(item.password);
                    toast(`copped ==> ${item.password}`, {
                      type: "success",
                      autoClose: 3000,
                    });
                    setActiveDemo(false);
                  }}
                >
                  <IconCopy />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Credential;

function IconClose() {
  return (
    <svg fill="none" viewBox="0 0 24 24" height="1em" width="1em">
      <path
        fill="currentColor"
        d="M6.225 4.811a1 1 0 00-1.414 1.414L10.586 12 4.81 17.775a1 1 0 101.414 1.414L12 13.414l5.775 5.775a1 1 0 001.414-1.414L13.414 12l5.775-5.775a1 1 0 00-1.414-1.414L12 10.586 6.225 4.81z"
      />
    </svg>
  );
}
