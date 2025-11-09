import Link from "next/link";



export default function Footer() {
  return (
    <footer className="absolute bottom-0 w-full text-center py-6 text-sm text-gray-500">
      <div className="flex justify-center text-[#9c9c9b] gap-5 display: inline-block;">
        <Link href="/pages/terms" className="mx-2">
          <span>Accessibility</span>
        </Link>
        <Link href="/pages/terms" className="mx-2">
          <span>Terms of Use</span>
        </Link>
        <Link href="/pages/terms" className="mx-2">
          <span>Legal</span>
        </Link>
        <Link href="/pages/terms" className="mx-2">
          <span>Privacy</span>
        </Link>
        <Link href="/pages/terms" className="mx-2">
          <span>Cookie Notice</span>
        </Link>
        <Link href="/pages/disclaimer" className="mx-2">
          <span>Disclaimer</span>
        </Link>
      </div>
      <br />
      <p className="text-xs text-gray-300">
        <span>
          © {new Date().getFullYear()} Alto Sapphire
        </span>{" "}
        — All Rights Reserved.
      </p>
    </footer>
  );
}
