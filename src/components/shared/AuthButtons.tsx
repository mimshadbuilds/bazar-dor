import Link from "next/link";

const AuthButtons = () => {
    return (
        <div>
            <>
                <Link href="/sign-in">
                    <button className="btn btn-outline border-none">সাইন ইন</button>
                </Link>

                <Link href="/sign-up">
                    <button className="btn bg-[#05893e] text-white">সাইন আপ</button>
                </Link>
            </>
        </div>
    );
};

export default AuthButtons;
