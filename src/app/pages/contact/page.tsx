"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Nav-Cont"; 
import Footer from "@/components/footer";

export default function ContactPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    department: "",
    topic: "",
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [successModal, setSuccessModal] = useState(false);

  const handleNext = () => step < 3 && setStep(step + 1);
  const handleBack = () => step > 1 && setStep(step - 1);

  // ⌨️ Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handleBack();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [step]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const form = new FormData();
      Object.entries(formData).forEach(([key, val]) => form.append(key, val));

      const res = await fetch("/api/contact", {
        method: "POST",
        body: form,
      });

      if (!res.ok) throw new Error("Failed to send");
      setSuccessModal(true);
      setStep(1);
      setFormData({ department: "", topic: "", name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const steps = [
    {
      id: 1,
      content: (
        <div className="flex flex-col justify-center items-center w-full h-full space-y-6">
          <h2 className="text-2xl font-semibold text-white mb-2">Select Department</h2>
          <select
            className="bg-gray-800 text-white border border-gray-700 p-3 rounded w-1/3"
            value={formData.department}
            onChange={(e) => updateField("department", e.target.value)}
          >
            <option value="">Choose a department</option>
            <option>Support</option>
            <option>Sales</option>
            <option>Technical</option>
            <option>Partnerships</option>
          </select>
        </div>
      ),
    },
    {
      id: 2,
      content: (
        <div className="flex flex-col justify-center items-center w-full h-full space-y-6">
          <h2 className="text-2xl font-semibold text-white mb-2">Choose a Topic</h2>
          <select
            className="bg-gray-800 text-white border border-gray-700 p-3 rounded w-1/3"
            value={formData.topic}
            onChange={(e) => updateField("topic", e.target.value)}
          >
            <option value="">Select a topic</option>
            <option>Account Access</option>
            <option>Platform Error</option>
            <option>Subscription</option>
            <option>Other</option>
          </select>
        </div>
      ),
    },
    {
      id: 3,
      content: (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center w-full h-full space-y-4"
        >
          <Input
            type="text"
            placeholder="Your Name"
            className="w-1/3 bg-gray-800 border-gray-700 text-white"
            value={formData.name}
            onChange={(e) => updateField("name", e.target.value)}
          />
          <Input
            type="email"
            placeholder="Email Address"
            className="w-1/3 bg-gray-800 border-gray-700 text-white"
            value={formData.email}
            onChange={(e) => updateField("email", e.target.value)}
          />
          <textarea
            placeholder="Message"
            className="w-1/3 bg-gray-800 border-gray-700 text-white p-3 rounded min-h-[150px]"
            value={formData.message}
            onChange={(e) => updateField("message", e.target.value)}
          />
          <Button type="submit" disabled={loading}>
            {loading ? <Loader2 className="animate-spin mr-2 h-4 w-4" /> : "Submit"}
          </Button>
        </form>
      ),
    },
  ];

  return (

    <div className="relative w-screen h-screen overflow-hidden">
    {/* Top Navigation */}
    <Navbar />
      <br />

      {/* ContactForm */}
      <div className="relative mt-35  w-full gap-6 flex overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full flex items-center justify-center"
          >
            {steps.find((s) => s.id === step)?.content}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-60 w-full flex justify-center space-x-4">
        {step > 1 && <Button variant="secondary" onClick={handleBack}>Back</Button>}
        {step < 3 && (
          <Button onClick={handleNext} disabled={!formData.department && step === 1}>
            Next
          </Button>
        )}
      </div>
      <br />
      

      <Dialog open={successModal} onOpenChange={setSuccessModal}>
        <DialogContent className="bg-gray-900 text-white border border-gray-700">
          <DialogHeader>
            <DialogTitle className="text-green-400">Message Sent Successfully!</DialogTitle>
          </DialogHeader>
          <p className="text-gray-400">Thank you for reaching out. We’ll get back to you soon.</p>
          <Button onClick={() => setSuccessModal(false)} className="mt-4">
            Close
          </Button>
        </DialogContent>
      </Dialog>

      <Footer />

    </div>
  );
}
