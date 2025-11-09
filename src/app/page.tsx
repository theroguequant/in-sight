"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mic } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AnimatedBackground from "@/components/AnimatedBackground";
import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";


export default function Home() {
  const router = useRouter();
  const [investorType, setInvestorType] = useState<string | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [audioURL, setAudioURL] = useState<string | null>(null);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
  const [audioChunks, setAudioChunks] = useState<Blob[]>([]);
  const handleClick = () => {
      router.push("/components/WealthForm"); // Replace with your desired path
    };

  // ✅ Handle investor disclaimer redirect
  useEffect(() => {
    const type = localStorage.getItem("investorType");
    if (!type) {
      router.push("/disclaimer");
    } else {
      setInvestorType(type);
    }
  }, [router]);

  if (!investorType) return null;


  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden ">
      {/* Top Navigation */}
      <Navbar />

      {/* Hero Content */}
      <div className="flex flex-col items-center gap-6">
          <h1 className="text-center text-[#252525] font-[Satoshi],system-ui font-extrabold leading-tight" style={{ fontSize: 'clamp(28px, 6vw, 56px)' }}>
            The Future of Wealth Begins With a Whisper
          </h1>

          <p className="max-w-xl text-[clamp(14px,1.6vw,18px)] opacity-80">
            Financial intelligence elevated through AI-driven insights.
          </p>

          {/* micro-value props */}
          <div className="mt-3 flex items-center gap-6 opacity-85 text-sm">
            <span className="px-3 py-1 rounded-full bg-white/3 backdrop-blur-sm">It <span className="text-yellow-500">Learns</span> You</span>
            <span className="px-3 py-1 rounded-full bg-white/3 backdrop-blur-sm">It <span className="text-yellow-500">Thinks</span> With You</span>
            <span className="px-3 py-1 rounded-full bg-white/3 backdrop-blur-sm">It <span className="text-yellow-500">Evolves</span></span>
          </div>

          {/* CTA */}
          <div className="mt-8">
            <Link href={'/'}>
            <button
              className={`relative inline-flex cursor-pointer items-center justify-center rounded-md border border-white/20 px-8 py-3 font-medium tracking-wide transition-all focus:outline-none  'opacity-80' : 'hover:scale-[1.02]'}`}>
              {/* Terminal-like caret */}
              <span className="mr-3 font-mono text-sm" aria-hidden>▌</span>
              <span className="uppercase">Enter</span>
               <br />
              {/* <span className="text-xs">try for free</span> */}
              
              {/* subtle pulse */}
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-1 w-12 rounded-full opacity-30" style={{ background: 'linear-gradient(90deg,#6b4bff,#9b6cff)' }} />
            </button> 
            </Link>
          </div>

          {/* <p className="mt-3 text-xs opacity-60">No cost. No commitment. Just a conversation.</p> */}
      </div>

      <Footer />

    </main>
  );
}
