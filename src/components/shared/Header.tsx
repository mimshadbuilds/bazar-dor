import NavLinks from '../NavLinks';
import AuthButtons from './AuthButtons';
import Link from 'next/link';
import { getBanglaDate } from '@/lib/dateUtils';
import { connection } from 'next/server';

const Header = async () => {
    
    await connection();
    const date = getBanglaDate();
    
    return (
        <section className='border-b border-neutral-200 bg-white'>    
                <header className='relative z-50 max-w-6xl mx-auto px-4 py-4'>
                    <Link href="/">
                    <div className='flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-2'>
                        <span className='size-10 grid bg-[#05893E] items-center text-lg text-white rounded-xl p-2'>🛒</span>
                        <div className='leading-tight'>
                            <h1 className='block text-xl font-bold'>বাজার দর</h1>
                            <p className='block text-xs text-base-content/60'>{date}</p>
                        </div>
                    </div>
                    </Link>
                    <div className='absolute right-4 flex gap-3 text-sm top-4'>
                        <AuthButtons />
                    </div>
                    <NavLinks />
                </header>
        </section>
    );
};

export default Header;