const Footer = () => {
    return (
<footer className="w-full bg-white p-5 text-slate-700 font-normal">
    <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-3 text-center md:flex-row md:items-center md:justify-between md:text-left">
        <p>বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।</p>
        <p className="md:text-right">
            সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
        </p>
    </div>
</footer>
    );
};

export default Footer;