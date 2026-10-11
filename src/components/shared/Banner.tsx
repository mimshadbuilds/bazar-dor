import { getCurrentUser } from "@/lib/auth-server";
import { getBanglaDate } from "@/lib/dateUtils";
import Image from "next/image";
import { connection } from "next/server";
import DashboardStats from "./DashboardStats";

const Banner = async () => {
    await connection();
    const date = getBanglaDate();

    const user = await getCurrentUser();

    return (
        <section className="bg-[#f0f5f0] px-4 py-7 sm:px-6 lg:px-8 lg:py-8">
            <div className="mx-auto w-full max-w-6xl grid grid-cols-1 items-center overflow-hidden rounded-[30px] border border-[#dce5dc] bg-[#fafcfa] px-5 py-10 shadow-sm sm:px-8 md:grid-cols-2 md:px-10 lg:px-5 lg:py-10">
                <div className="flex max-w-175 flex-col items-center space-y-5 text-center md:items-start md:text-left lg:pl-0">
                    <p className="inline-block rounded-full bg-[#e1f2e7] px-4 py-1.5 text-sm font-medium text-[#05893e]">
                        {date}
                    </p>
                    <h1 className="max-w-[650px] text-2xl sm:text-[38px] font-bold leading-tight tracking-[-0.02em] text-[#111] sm:text-[42px] lg:text-[46px]">
                        আজকের বাজারের দাম এক নজরে
                    </h1>
                    <p className="max-w-170 text-sm leading-[1.6] sm:leading-[1.8] text-[#555] sm:text-[17px]">
                        চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
                        বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
                    </p>
                    <a href="#সব-পণ্য"
                        className="inline-flex items-center justify-center rounded-lg bg-[#05893e] px-2 py-3 text-sm font-semibold text-white shadow-sm transition duration-300 hover:bg-[#05662f] md:px-5">
                        সব পণ্য দেখুন
                    </a>
                </div>

                <div className="flex justify-center md:justify-end">
                    {user 
                      ? ( <DashboardStats />                        
                    ) : (
                        <Image src="/bazar-hero.png"
                        width={400}
                        height={400}
                        alt="বাজারের পণ্যের ছবি"
                        priority
                        className="w-65 sm:w-75 md:w-85 lg:w-95"
                        />
                    )}
                </div>
            </div>
        </section>
    );
};

export default Banner;
