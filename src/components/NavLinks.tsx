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
        <nav className="flex justify-center items-center gap-x-5 gap-y-2 text-sm text-slate-800 mt-8">
            {navItems.map(nl => 
            <Link href={`/category/${nl.slug}`} key={nl.id}>
            {nl.icon} {nl.nameBn}
            </Link>)}
        </nav>
    );
};

export default NavLinks;