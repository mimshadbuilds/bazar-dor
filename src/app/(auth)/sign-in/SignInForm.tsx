"use client";

import RedirectToast from "@/components/shared/RedirectToast";
import { authClient, signIn } from "@/lib/auth-client";
import { Description, FieldError, Form, InputGroup, Label, TextField } from "@heroui/react";
import Link from "next/link";
import React, { Suspense } from "react";
import toast from "react-hot-toast";
import { FaGithub, FaGoogle } from "react-icons/fa";

const SignInForm = () => {
    const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const resData: Record<string, string> = {};
        formData.forEach((value, key) => {
            resData[key] = value.toString();
        });

        const { data, error } = await signIn.email({
            email: resData.email as string,
            password: resData.password as string,
            rememberMe: true,
            callbackURL: "/",
        });

        if(error) {
            toast.error(error.message ?? "সাইন ইন করতে সমস্যা হয়েছে।");
            return;
        }

        if(data) {
            toast.success("সফলভাবে সাইন ইন হয়েছে।");
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
    <>  
        <Suspense fallback={null}>
            <RedirectToast />
        </Suspense>

        <main className="flex min-h-[calc(100vh-64px)] flex-col items-center bg-[#f0f5f0] px-4 py-8 sm:py-10">
            <header className="mb-7 text-center">
                <h1 className="text-xl font-semibold tracking-tight text-[#17251b] sm:text-2xl">সাইন ইন</h1>
                <p className="mt-2 text-xs text-[#69766b] sm:text-sm">বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।</p>
            </header>
            <section className="w-full max-w-[460px] rounded-[21px] border border-[#dce5dd] bg-[#fbfdfb] p-5 sm:p-7">
                <Form className="flex w-full flex-col gap-5" render={(props) => <form {...props} data-custom="foo" />} onSubmit={handleSignIn}>
                    <TextField className="flex w-full flex-col gap-2" isRequired name="email" type="email" validate={(value) => {
                        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) return "Please enter a valid email address";
                        return null;
                    }}>
                        <Label className="text-sm font-medium text-[#17251b]">ইমেইল</Label>
                        <InputGroup fullWidth>
                            <InputGroup.Input className="h-[50px] w-full rounded-xl border border-[#cfd8d0] bg-transparent px-4 text-sm text-[#17251b] outline-none transition focus-within:border-[#07883e] focus-within:ring-2 focus-within:ring-[#07883e]/15" placeholder="you@example.com" />
                        </InputGroup>
                        <FieldError className="text-sm text-red-600" />
                    </TextField>
                    <TextField className="flex w-full flex-col gap-2" isRequired name="password" minLength={8} validate={(value) => {
                        if (value.length < 8) return "Password must be at least 8 characters";
                        if (!/[A-Z]/.test(value)) return "Password must contain at least one uppercase letter";
                        if (!/[0-9]/.test(value)) return "Password must contain at least one number";
                        return null;
                    }}>
                        <Label className="text-sm font-medium text-[#17251b]">পাসওয়ার্ড</Label>
                        <InputGroup fullWidth>
                            <InputGroup.Input name="password" type="password" className="h-[50px] w-full rounded-xl border border-[#cfd8d0] bg-transparent px-4 text-sm text-[#17251b] outline-none transition focus-within:border-[#07883e] focus-within:ring-2 focus-within:ring-[#07883e]/15" placeholder="কমপক্ষে ৮ অক্ষর" />
                        </InputGroup>
                        <Description className="text-xs text-[#69766b]">কমপক্ষে ৮ অক্ষর, ১টি বড় হাতের অক্ষর ও ১টি সংখ্যা।</Description>
                        <FieldError className="text-sm text-red-600" />
                    </TextField>
                    <div className="-mt-2 text-right text-sm">
                        <Link href="/forgot-password" className="font-medium text-[#07883e] hover:underline">পাসওয়ার্ড ভুলে গেছেন?</Link>
                    </div>
                    <button type="submit" className="h-[50px] w-full rounded-xl bg-[#07883e] px-4 text-sm font-bold text-white shadow-sm transition hover:bg-[#067534] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#07883e]">সাইন ইন</button>
                    <div className="flex items-center gap-4 py-1">
                        <div className="h-px flex-1 bg-[#dce5dd]" />
                        <span className="text-sm text-[#17251b]">অথবা</span>
                        <div className="h-px flex-1 bg-[#dce5dd]" />
                    </div>
                    <div className="grid w-full grid-cols-2 gap-2">
                        <button type="button" onClick={handleGoogleSignIn} className="flex min-h-[50px] items-center justify-center gap-2 rounded-xl border border-[#39463c] px-2 text-xs font-semibold text-[#17251b] transition hover:bg-[#f0f5f0] sm:text-sm">
                            <FaGoogle className="shrink-0 text-[#4285f4]" />
                            <span>Google দিয়ে চালিয়ে যান</span>
                        </button>
                        <button type="button" onClick={handleGitHubSignIn} className="flex min-h-[50px] items-center justify-center gap-2 rounded-xl border border-[#39463c] px-2 text-xs font-semibold text-[#17251b] transition hover:bg-[#f0f5f0] sm:text-sm">
                            <FaGithub className="shrink-0" />
                            <span>GitHub দিয়ে চালিয়ে যান</span>
                        </button>
                    </div>
                    <p className="w-full text-center text-xs text-[#69766b] sm:text-sm">
                        অ্যাকাউন্ট নেই? <Link href="/sign-up" className="font-semibold text-[#07883e] underline underline-offset-2 hover:text-[#056b30]">সাইন আপ করুন</Link>
                    </p>
                </Form>
            </section>
            <Link href="/" className="mt-7 text-xs text-[#69766b] underline underline-offset-4 transition hover:text-[#07883e] sm:text-sm">← হোম পেজে ফিরে যান</Link>
        </main>
    </>  
    );
};

export default SignInForm;