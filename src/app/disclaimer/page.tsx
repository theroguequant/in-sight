"use client";

import { useEffect, useState } from "react";
import InvestorForm from "@/components/InvestoForm";
import { useRouter } from "next/navigation";



export default function DisclaimerPage() {
  const router = useRouter();
  const [showPage, setShowPage] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("disclaimerAccepted");
    if (accepted === "true") {
      router.push("/");
    } else {
      setShowPage(true);
    }
  }, [router]);

  if (!showPage) return null;

  return (
    <main className="min-h-screen flex items-center justify-center bg-white text-gray-900 px-6">
      <div className="max-w-3xl text-center space-y-10">
        {/* Header */}
        <header className="space-y-4">
          <h1 className="text-3xl font-semibold tracking-tight">
            Disclaimer
          </h1>
          <p className="text-gray-600 leading-relaxed">
            Please read this important information carefully before proceeding.
            Confirm your User type and country so we can display the correct Information.
          </p>
        </header>

        {/* Investor Form */}
        <InvestorForm layout="inline" />

        {/* Legal Disclaimer */}

      </div>
    </main>
  );
}
