"use client";

import { authClient, signUp } from "@/lib/auth-client";
import { Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";
import { FaGithub, FaGoogle } from "react-icons/fa";

const SignUpPage = () => {
    const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const resData: Record<string, string> = {};
        formData.forEach((value, key) => {
            resData[key] = value.toString();
        });

        const { data, error } = await signUp.email({
            name: resData.name as string,
            email: resData.email as string,
            password: resData.password as string,
            image: resData.image as string,
        });

        if (data) {
            toast.success("অভিনন্দন! সাইন আপ সফল হয়েছে।");
            redirect("/sign-in");
        }

        if (error) {
            toast.error("সাইন আপ অসফল! এই ইমেইলে ইতিমধ্যে ইউজার আছে, নতুন ইমেইল দিয়ে চেষ্টা করুন।");
        }
};

    const handleGoogleSignIn = async () => {
        await authClient.signIn.social({
            provider: "google",
            callbackURL: "/",
        });
};
    
    const handleGitHubSignIn = async () => {
        await authClient.signIn.social({
        provider: "github",
        callbackURL: "/",
    });
};

    return (
        <main className="flex min-h-[calc(100vh-64px)] flex-col items-center bg-[#f0f5f0] px-4 py-8 sm:py-10">
            <header className="mb-7 text-center">
                <h1 className="text-xl font-semibold tracking-tight text-[#17251b] sm:text-2xl">অ্যাকাউন্ট তৈরি করুন</h1>
                <p className="mt-2 text-xs text-[#69766b] sm:text-sm">বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।</p>
            </header>
                <section className="w-full max-w-[460px] rounded-[21px] border border-[#dce5dd] bg-[#fbfdfb] p-5 sm:p-7">                <Form className="flex w-full flex-col gap-4" onSubmit={handleSignUp}>
                    <TextField className="flex w-full flex-col gap-2" isRequired name="name" validate={(value) => value.length < 3 ? "Name must be at least 3 characters" : null}>
                        <Label className="text-sm font-medium text-[#17251b]">নাম</Label>
                        <Input className="h-[50px] w-full rounded-xl border border-[#cfd8d0] bg-transparent px-4 text-base text-[#17251b] outline-none transition focus-within:border-[#07883e] focus-within:ring-2 focus-within:ring-[#07883e]/15" placeholder="যেমন: রহিম উদ্দিন" />
                        <FieldError className="text-sm text-red-600" />
                    </TextField>
                    <TextField className="flex w-full flex-col gap-2" name="image" type="url">
                        <Label className="text-sm font-medium text-[#17251b]">ইমেজ</Label>
                        <Input className="h-[50px] w-full rounded-xl border border-[#cfd8d0] bg-transparent px-4 text-base text-[#17251b] outline-none transition focus-within:border-[#07883e] focus-within:ring-2 focus-within:ring-[#07883e]/15" placeholder="Image URL" />
                        <FieldError className="text-sm text-red-600" />
                    </TextField>
                    <TextField className="flex w-full flex-col gap-2" isRequired name="email" type="email" validate={(value) => !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value) ? "Please enter a valid email address" : null}>
                        <Label className="text-sm font-medium text-[#17251b]">ইমেইল</Label>
                        <Input className="h-[50px] w-full rounded-xl border border-[#cfd8d0] bg-transparent px-4 text-base text-[#17251b] outline-none transition focus-within:border-[#07883e] focus-within:ring-2 focus-within:ring-[#07883e]/15" placeholder="you@example.com" />
                        <FieldError className="text-sm text-red-600" />
                    </TextField>
                    <TextField className="flex w-full flex-col gap-2" isRequired minLength={8} name="password" type="password" validate={(value) => {
                        if (value.length < 8) return "Password must be at least 8 characters";
                        if (!/[A-Z]/.test(value)) return "Password must contain at least one uppercase letter";
                        if (!/[0-9]/.test(value)) return "Password must contain at least one number";
                        return null;
                    }}>
                        <Label className="text-sm font-medium text-[#17251b]">পাসওয়ার্ড</Label>
                        <Input className="h-[50px] w-full rounded-xl border border-[#cfd8d0] bg-transparent px-4 text-base text-[#17251b] outline-none transition focus-within:border-[#07883e] focus-within:ring-2 focus-within:ring-[#07883e]/15" placeholder="কমপক্ষে ৮ অক্ষর" />
                        <Description className="text-xs text-[#69766b]">কমপক্ষে ৮ অক্ষর, ১টি বড় হাতের অক্ষর ও ১টি সংখ্যা।</Description>
                        <FieldError className="text-sm text-red-600" />
                    </TextField>

                    <button type="submit" className="mt-1 h-[50px] w-full rounded-xl bg-[#07883e] px-4 text-sm font-bold text-white shadow-sm transition hover:bg-[#067534] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#07883e]">অ্যাকাউন্ট তৈরি করুন</button>
                    <div className="flex items-center gap-4 py-1">
                        <div className="h-px flex-1 bg-[#dce5dd]" />
                        <span className="text-sm text-[#17251b]">অথবা</span>
                        <div className="h-px flex-1 bg-[#dce5dd]" />
                    </div>
                    <div className="grid w-full grid-cols-2 gap-2">
                        <button type="button" onClick={handleGoogleSignIn} className="flex min-h-[50px] items-center justify-center gap-2 rounded-xl border border-[#39463c] px-2 text-sm font-semibold text-[#17251b] transition hover:bg-[#f0f5f0] sm:text-base">
                            <FaGoogle className="shrink-0 text-[#4285f4]" />
                            <span>Google দিয়ে চালিয়ে যান</span>
                        </button>
                        <button type="button" onClick={handleGitHubSignIn} className="flex min-h-[50px] items-center justify-center gap-2 rounded-xl border border-[#39463c] px-2 text-sm font-semibold text-[#17251b] transition hover:bg-[#f0f5f0] sm:text-base">
                            <FaGithub className="shrink-0" />
                            <span>GitHub দিয়ে চালিয়ে যান</span>
                        </button>
                    </div>
                    <p className="mt-1 w-full text-center text-xs text-[#69766b] sm:text-sm">
                        অ্যাকাউন্ট আছে? <Link className="font-semibold text-[#07883e] underline underline-offset-2 hover:text-[#056b30]" href="/sign-in">সাইন ইন করুন</Link>
                    </p>
                </Form>
            </section>

            <Link href="/" className="mt-7 text-xs text-[#69766b] underline underline-offset-4 transition hover:text-[#07883e] sm:text-sm">← হোম পেজে ফিরে যান</Link>
        </main>
    );
};

export default SignUpPage;