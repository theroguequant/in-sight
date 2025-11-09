"use client";

import { useClientStore } from "@/store/clientStore";

export function Component() {
  const name = useClientStore((s) => s.name); // ✅ safe
  return <div>{name}</div>;
}