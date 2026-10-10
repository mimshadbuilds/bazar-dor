import { getCategories } from "@/lib/api";
import Link from "next/link";

interface INavs {
    id: string,
    slug: string,
    nameBn: string,
    icon: string
}

const NavLinks = async () => {
    const navItems: INavs[] = await getCategories();
    return (
        <nav className="flex justify-start gap-4 overflow-x-auto px-4 pb-3 text-sm text-[#26352a] sm:gap-6 md:mx-auto md:max-w-6xl md:px-4">
            {navItems.map(nl => 
            <Link href={`/category/${nl.slug}`} key={nl.id}>
            {nl.icon} {nl.nameBn}
            </Link>)}
        </nav>
    );
};

export default NavLinks;