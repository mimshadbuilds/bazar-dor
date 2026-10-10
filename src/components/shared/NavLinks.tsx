import { getCategories } from "@/lib/api";
import Link from "next/link";
import NavLinkItem from "./NavItems";

interface INavs {
    id: string,
    slug: string,
    nameBn: string,
    icon: string
}

const NavLinks = async () => {
    const navItems: INavs[] = await getCategories();

    return (
        <nav className="flex justify-start items-center gap-4 overflow-x-auto px-2 pb-1 text-sm text-[#26352a] sm:gap-6 md:mx-auto md:max-w-6xl md:px-4">
            {navItems.map(nl => 
                <NavLinkItem key={nl.id}
                    slug={nl.slug}
                    nameBn={nl.nameBn}
                    icon={nl.icon}
                />
        )}
        </nav>
    );
};

export default NavLinks;