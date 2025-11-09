import Link from "next/link";
import { LinkIcon } from "lucide-react";


export default function Navbar() {
  return (
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-10 py-4 bg-transparent"> 
        <Link href="/">
        <div className="p-2 bg-transparent hover:cursor-pointer transition">
            <LinkIcon
              size={25}
              
              className="text-[#ffffff] transition"
            />
          </div>
        </Link>
        <div className="flex gap-4">
          <button className="flex items-center mr-2.5 gap-2 text-sm text-gray-300 hover:text-yellow-400 transition">
             <Link href="/pages/contact">Contact Us</Link>
          </button>
          <button className="flex items-center gap-2 text-sm text-gray-300 hover:text-yellow-400 transition">
             <Link href="/pages/login">Sign In</Link>
          </button>
        </div>
      </div>
  );
}
