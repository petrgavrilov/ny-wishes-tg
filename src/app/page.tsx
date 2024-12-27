"use client";

import Welcome from "@/components/welcome/Welcome";
import { useSessionData } from "@/hooks/useSessionData";

export default function HomePage() {
  const { data, isLoading } = useSessionData();

  return <main className="root">{isLoading ? null : <Welcome />}</main>;
}
