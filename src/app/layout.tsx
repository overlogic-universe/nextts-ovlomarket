
"use client";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/layouts/navbar/navbar";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "OvLoMarket",
  description: "Over Logic Marketplace",
};

type NextRouterType = ReturnType<typeof useRouter>;

interface CustomRouter extends NextRouterType {
  pathname: string;
  // kalau mau properti lain dari router, tambahkan di sini
}

// buat halaman yang tidak ada navbarnya
const disableNavbar = ["/404"];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { pathname } = router as CustomRouter;

  useEffect(() => {}, [pathname]);

  return (
    <html lang="en">
      <body className={inter.className}>
        {!disableNavbar.includes(pathname) && <Navbar />}
        {children}
      </body>
    </html>
  );
}
