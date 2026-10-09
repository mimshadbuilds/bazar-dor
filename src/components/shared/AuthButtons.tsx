"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaUserCheck } from "react-icons/fa";

const AuthButtons = () => {
    const router = useRouter();

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { data: session, isPending, error } = authClient.useSession();
    const user = session?.user;

    const handleSignOut = async () => {
        const { error } = await authClient.signOut();

        if (error) return;

        setIsMenuOpen(false);
        router.push("/sign-in");
        router.refresh();
    };

    if (isPending) return null;

    if (error || !user) {
        return (
            <div className="flex items-center gap-2">
                <Link href="/sign-in" className="btn btn-outline border-none">সাইন ইন</Link>
                <Link href="/sign-up" className="btn bg-[#05893e] text-white hover:bg-[#047532]">সাইন আপ</Link>
            </div>
        );
    }

    return (
        <div className="relative z-60">
            <button type="button" onClick={() => setIsMenuOpen((open) => !open)} aria-expanded={isMenuOpen} aria-label="অ্যাকাউন্ট মেনু" className="flex items-center gap-2 rounded-full p-1 transition hover:bg-[#f0f5f0]">
            <Avatar size="sm" className="relative size-8 min-w-8 shrink-0 overflow-hidden rounded-full bg-[#f0f5f0] ring-2 ring-[#07883e]/20">
                <Avatar.Image
                    alt={user.name ?? "User"}
                    src={user.image ?? undefined}
                    className="absolute inset-0 size-full rounded-full object-cover"
                />
                <Avatar.Fallback className="flex size-full items-center justify-center rounded-full">
                    <span className="text-xs font-semibold">
                        {(user.name ?? "U").charAt(0).toUpperCase()}
                    </span>
                </Avatar.Fallback>
            </Avatar>
                <span className="hidden max-w-40 truncate text-sm font-semibold text-[#17251b] sm:block">{user.name}</span>
                <span className="text-xs text-[#69766b]">▾</span>
            </button>

            {isMenuOpen && (
                <>
                <button type="button" aria-label="মেনু বন্ধ করুন" className="fixed inset-0 z-40 cursor-default" onClick={() => setIsMenuOpen(false)} />
                    <div className="absolute right-0 top-full z-50 mt-3 w-64 rounded-2xl border border-[#dce5dd] bg-[#fbfdfb] p-4 shadow-lg">
                        <div className="border-b border-[#e5ebe5] pb-3">
                            <p className="truncate font-semibold text-[#17251b]">{user.name}</p>
                            <p className="mt-1 truncate text-sm text-[#69766b]">{user.email}</p>
                        </div>
                        <Link href="/profile" onClick={() => setIsMenuOpen(false)} className="mt-2 flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium text-[#17251b] transition hover:bg-[#f0f5f0]">
                            <span><FaUserCheck size="18" /></span>
                            আমার প্রোফাইল
                        </Link>
                        <button type="button" onClick={handleSignOut} className="flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left text-sm font-semibold text-red-600 transition hover:bg-red-50">
                            <span>↪</span>
                            সাইন আউট
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default AuthButtons;
