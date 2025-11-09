import React from "react";
import { QrCode, LogIn, LinkIcon } from "lucide-react";
import Link from 'next/link';
import Footer from "@/components/footer";
import Navbar from "@/components/Nav-login";


export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="w-full max-w-4xl flex bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden">
        {/* Top Navigation */}
        <Navbar />
        
        {/* Left Side – QR Code Section */}
        <div className="flex flex-col items-center justify-center w-1/2 bg-zinc-950 p-10 border-r border-zinc-800">
          <h2 className="text-lg font-semibold text-white mb-2 tracking-wide">
            Alto-Sapphire Login
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Scan with your mobile app to authenticate
          </p>
          <div className="bg-zinc-800 p-6 rounded-xl border border-zinc-700">
            <QrCode className="text-yellow-500" size={100} />
          </div>
          <p className="text-xs text-gray-500 mt-6 text-center">
            Available on iOS and Android <br /> 
            <br/>
          </p>
        </div>

        {/* Right Side – Login Form Section */}
        <div className="w-1/2 p-10 flex flex-col justify-center">
          <div className="mb-8">
            <h1 className="text-2xl text-center font-semibold text-white tracking-wide">
              In-Sight Login
            </h1>
            <p className="text-sm text-center text-gray-500">
              Institutional Access Portal
            </p>
          </div>

          <form className="space-y-5">
            <div>
              <br/>
              <input
                type="email"
                placeholder="Email / User ID"
                className="w-full bg-zinc-800 border border-zinc-700 text-gray-200 text-center px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            <br/>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-yellow-500 text-black font-semibold py-2 rounded-md hover:bg-yellow-400 transition"
            >
              <LogIn size={18} /> Sign In
            </button>
          </form>

          <p className="text-xs text-gray-500 mt-6 text-center">
            For login credentials, contact your system administrator.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
