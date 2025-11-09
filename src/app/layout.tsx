import "./global.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Alto — Discover Hidden Financial Opportunities",
  description: "Finding hidden opportunities and value in complex or obscure financial landscapes ",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
        {children}
      </body>
    </html>
  );
}
