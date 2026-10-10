"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkItemProps {
    slug: string;
    nameBn: string;
    icon: string;
}

const NavLinkItem = ({ slug, nameBn, icon }: NavLinkItemProps) => {
    const pathname = usePathname();
    const href = `/category/${slug}`;
    const isActive = pathname === href;

    return (
        <Link href={href}
            className={`btn-sm flex shrink-0 items-center rounded-lg px-1.5 py-1.5 font-medium transition ${
            isActive
            ? "bg-[#05893E] text-white"
            : "text-[#26352a] hover:bg-[#e1f2e7] hover:text-[#05893E]"
                }`}>
            <span>{icon}</span>
            <span>{nameBn}</span>
        </Link>
    );
};

export default NavLinkItem;