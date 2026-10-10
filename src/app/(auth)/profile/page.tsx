/* eslint-disable @next/next/no-img-element */
"use client";

import { authClient } from "@/lib/auth-client";
import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const Profile = () => {
    const router = useRouter();
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    const [save, setSave] = useState(false);

    const handleUpdateProfile = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const name = formData.get("name")?.toString().trim() ?? "";
        const image = formData.get("image")?.toString().trim() ?? "";
        setSave(true);

        try {
            const { error } = await authClient.updateUser({
                name,
                image: image || undefined,
            });
            if (error) {
                toast.error(error.message ?? "একটি সমস্যা হয়েছে!");
                return;
            }

            toast.success("প্রোফাইল আপডেট সফল হয়েছে!");
        } catch {
            toast.error("প্রোফাইল আপডেট করা যায়নি। আবার চেষ্টা করুন।");
        } finally {
            setSave(false);
        }
    };

    const handleSignOut = async () => {
        const { error } = await authClient.signOut();

        if(error) {
            toast.error("সাইন আউট করা যায়নি। আবার চেষ্টা করুন।");
            return;
        }

        toast.success("আপনার সাইন আউট সফল হয়েছে।");
        router.push("/sign-in");
        router.refresh();
    };

    if (isPending) {
        return (
            <main className="min-h-[calc(100vh-64px)] bg-[#f0f5f0] px-4 py-8">
                <div className="mx-auto max-w-[720px] animate-pulse">
                    <div className="mb-6 h-8 w-40 rounded bg-[#dce5dd]" />
                    <div className="h-24 rounded-2xl bg-white" />
                    <div className="mt-4 h-64 rounded-2xl bg-white" />
                </div>
            </main>
        );
    }

    if (!user) {
        return (
            <main className="flex min-h-[calc(100vh-64px)] items-center justify-center bg-[#f0f5f0] px-4">
                <section className="w-full max-w-md rounded-2xl border border-[#dce5dd] bg-[#fbfdfb] p-7 text-center">
                    <h1 className="text-xl font-bold text-[#17251b]">প্রোফাইল দেখতে সাইন ইন করুন</h1>
                    <p className="mt-2 text-sm text-[#69766b]">আপনার অ্যাকাউন্টের তথ্য দেখতে লগইন করুন।</p>
                    <Link href="/sign-in" className="mt-5 inline-flex rounded-xl bg-[#07883e] px-5 py-3 text-sm font-semibold text-white hover:bg-[#067534]">
                        সাইন ইন
                    </Link>
                </section>
            </main>
        );
    }

    return (
        <main className="min-h-[calc(100vh-64px)] bg-[#f0f5f0] px-4 py-8 sm:py-10">
            <section className="mx-auto max-w-[720px]">
                <header className="mb-6">
                    <h1 className="text-xl font-bold text-[#17251b] sm:text-2xl">আমার প্রোফাইল</h1>
                    <p className="mt-1 text-sm text-[#69766b]">আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন ও পরিবর্তন করুন।</p>
                </header>
                <div className="flex items-center gap-4 rounded-2xl border border-[#dce5dd] bg-[#fbfdfb] p-4 sm:p-5">
                    <div className="grid size-16 shrink-0 place-items-center overflow-hidden rounded-full bg-[#f0f5f0] ring-2 ring-[#dce5dd] ring-offset-2 ring-offset-[#fbfdfb]">
                        <span className="col-start-1 row-start-1 text-2xl font-semibold text-[#07883e]">
                            {(user.name ?? "U").charAt(0).toUpperCase()}
                        </span>
                        {user.image && (
                            <img src={user.image}
                                alt={user.name ?? "Profile"}
                                className="col-start-1 row-start-1 size-full rounded-full object-cover"
                                onError={(e) => {
                                    e.currentTarget.style.display = "none";
                                }}
                            />
                        )}
                    </div>
                    <div className="min-w-0 flex-1">
                        <h2 className="truncate font-semibold text-[#17251b]">{user.name}</h2>
                        <p className="mt-1 truncate text-sm text-[#69766b]">{user.email}</p>
                    </div>
                    <button type="button" onClick={handleSignOut} className="shrink-0 rounded-lg border border-red-300 px-3 py-2 text-xs font-semibold text-red-600 transition hover:bg-red-50 sm:text-sm">
                        ↪ সাইন আউট
                    </button>
                </div>
                <section className="mt-4 rounded-2xl border border-[#dce5dd] bg-[#fbfdfb] p-5 sm:p-6">
                    <h2 className="mb-5 text-base font-bold text-[#17251b]">তথ্য</h2>
                    <form key={user.id} onSubmit={handleUpdateProfile} className="flex flex-col gap-5">
                        <label className="flex flex-col gap-2 text-sm font-medium text-[#17251b]">
                            নাম
                            <input name="name" defaultValue={user.name ?? ""} required minLength={2} className="h-11 w-full rounded-lg border border-[#cfd8d0] bg-transparent px-3 outline-none transition focus:border-[#07883e] focus:ring-2 focus:ring-[#07883e]/15" placeholder="আপনার নাম লিখুন" />
                        </label>
                        <label className="flex flex-col gap-2 text-sm font-medium text-[#17251b]">
                            প্রোফাইল ছবির URL
                            <input name="image" type="url" defaultValue={user.image ?? ""} className="h-11 w-full rounded-lg border border-[#cfd8d0] bg-transparent px-3 outline-none transition focus:border-[#07883e] focus:ring-2 focus:ring-[#07883e]/15" placeholder="https://example.com/image.jpg" />
                        </label>
                        <div className="flex justify-end">
                            <button type="submit" disabled={save} className="rounded-lg bg-[#07883e] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#067534] disabled:cursor-not-allowed disabled:opacity-60">
                                {save ? "সংরক্ষণ হচ্ছে..." : "পরিবর্তন সংরক্ষণ করুন"}
                            </button>
                        </div>
                    </form>
                </section>
            </section>
        </main>
    );
};

export default Profile;
