import type { Metadata } from "next";
import SignInForm from "./SignInForm";

export const metadata: Metadata = {
    title: "সাইন ইন",
    description: "বাজার দর অ্যাকাউন্টে সাইন ইন করে বিস্তারিত বাজারদর, বাজার তুলনা ও আপনার প্রোফাইল দেখুন।",
};

export default function SignInPage() {
    return <SignInForm />;
}
