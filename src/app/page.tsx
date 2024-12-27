"use client";

import Welcome from "@/components/welcome/Welcome";
import { useSessionData } from "@/hooks/useSessionData";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function HomePage() {
  const { data, isLoading } = useSessionData();
  const router = useRouter();

  // useEffect(() => {
  //   router.push("/wishes");
  // }, []);

  return <main className="root">{isLoading ? null : <Welcome />}</main>;
}
