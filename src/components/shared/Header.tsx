import NavLinks from '../NavLinks';
import AuthButtons from './AuthButtons';
import Link from 'next/link';
import { getBanglaDate } from '@/lib/dateUtils';
import { connection } from 'next/server';

const Header = async () => {
    
    await connection();
    const date = getBanglaDate();
    
    return (
        <section>
            <div className="border-b border-neutral-100 bg-white/90 backdrop-blur-md">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
                    <Link href="/" className="flex items-center gap-3">
                        <span className="grid size-11 place-items-center rounded-xl bg-[#05893E] text-xl text-white">
                            🛒
                        </span>
                        <div className="leading-tight">
                            <h1 className="text-lg font-bold text-[#17251b] sm:text-xl">
                                বাজার দর
                            </h1>
                            <p className="text-[11px] text-neutral-500 sm:text-xs">
                                {date}
                            </p>
                        </div>
                    </Link>
                    <div className="flex items-center gap-3 text-sm">
                        <AuthButtons />
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-6xl px-4 py-2 bg-white">
                <NavLinks />
            </div>
        </section>
    );
};

export default Header;