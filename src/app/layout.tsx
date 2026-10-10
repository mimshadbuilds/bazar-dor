import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import MarqueePage from "@/components/homepage/Marquee";
import Footer from "@/components/shared/Footer";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";


const hindsiliguri = Hind_Siliguri({
  subsets: ["bengali", "latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "বাজার দর | আজকের দাঁড়ির দাম",
  description: "",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="bn"
      data-theme="light"
      className={`${hindsiliguri.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#f0f5f0]">
        <Toaster position="top-center" />
          <Suspense fallback={<div className="header-skeleton" />}>
          <header className="sticky top-0 z-50 shadow-sm">
            <Header />
          </header>
          </Suspense>
          <MarqueePage/>
          <main>
            {children}
          </main>
          <Footer />
      </body>
    </html>
  );
}
