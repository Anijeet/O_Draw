"use client";

import { useRouter } from "next/navigation";
import Dashboard from "../components/Dashboard";
import { useEffect, useState } from "react";

const Page = () => {
  const router = useRouter();
  const [token, setToken] = useState<string | null>(null); // Initialize token as null

  // Fetch token only on the client side after mounting
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
    if (!storedToken) {
      router.push("/signin");
    }
  }, [router]);

  // Show a loading state until token is checked
  if (token === null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {token ? <Dashboard /> : <div>Please log in</div>}
    </div>
  );
};

export default Page;