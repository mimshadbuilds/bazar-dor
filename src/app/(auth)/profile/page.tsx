import type { Metadata } from "next";
import ProfileClient from "./ProfileClient";

export const metadata: Metadata = {
    title: "আমার প্রোফাইল",
    description: "আপনার বাজার দর অ্যাকাউন্টের প্রোফাইল তথ্য দেখুন ও হালনাগাদ করুন।",
};

export default function ProfilePage() {
    return <ProfileClient />;
}
