import Link from "next/link";
import Logout from "./logout";

const nav = [
  {
    title: "Profile",
    url: "/profile",
  },
  {
    title: "Admin",
    url: "/admin",
  },
  {
    title: "User",
    url: "/user",
  },
  {
    title: "Manager",
    url: "/manager",
  },
];

function Navbar() {
  return (
    <div className="max-w-6xl flex justify-between mx-auto">
      <Link className="py-1 px-5 hover:bg-slate-100 " href="/">
        Logo
      </Link>
      <div className="flex">
        {nav.map((item, i) => (
          <Link
            key={i}
            className="py-2 px-5 hover:bg-teal-500 hover:text-white"
            href={item.url}
          >
            {item.title}
          </Link>
        ))}
        <Logout />
      </div>
    </div>
  );
}

export default Navbar;
