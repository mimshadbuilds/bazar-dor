import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
import "./globals.css";
import ToastProvider from "./ToastProvider";
import Header from "@/components/shared/Header";
import MarqueePage from "@/components/homepage/Marquee";

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
      lang="en"
      data-theme="light"
      className={`${hindsiliguri.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ToastProvider>
          <Header />
          <MarqueePage/>
          <main className="max-w-7xl mx-auto">{children}</main>
        </ToastProvider>
      </body>
    </html>
  );
}
