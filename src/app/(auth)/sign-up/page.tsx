import type { Metadata } from "next";
import SignUpForm from "./SignUpForm";

export const metadata: Metadata = {
    title: "অ্যাকাউন্ট তৈরি করুন",
    description: "বাজার দর-এ বিনামূল্যে অ্যাকাউন্ট তৈরি করে বিস্তারিত বাজারদর ও দামের পরিবর্তন দেখুন।",
};

export default function SignUpPage() {
    return <SignUpForm />;
}
