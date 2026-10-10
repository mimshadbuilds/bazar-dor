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
  title: {
    default: "বাজার দর | আজকের বাজারের দাম",
    template: "%s | বাজার দর",
  },
  description: "বাংলাদেশের বাজারে চাল, ডাল, তেল, সবজি, মাছ ও মাংসের আজকের দাম এবং দামের পরিবর্তন দেখুন।",
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
          <Suspense fallback={null}>
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
