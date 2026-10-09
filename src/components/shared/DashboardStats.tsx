const stats = [
    { label: "পণ্য", sub: "টি নির্ধারিত পণ্য", value: "৩৩" },
    { label: "বাজার", sub: "টি বাজারের অন্তর্ভুক্ত", value: "১২" },
    { label: "বিভাগ", sub: "টি বিভাগের তথ্য", value: "৮" },
];

const DashboardStats = () => {
    return (
        <div className="grid w-full grid-cols-3 gap-3 rounded-2xl bg-[#f7faf7] p-4">
            {stats.map(s => (
                <div key={s.label}
                    className="rounded-xl bg-white px-2 py-4 text-center shadow-sm">
                    <p className="text-sm font-medium text-[#555]">{s.label}</p>
                    <p className="mt-2 text-3xl font-bold text-[#05893e] sm:text-4xl">
                        {s.value}
                    </p>
                    <p className="mt-1 text-[11px] leading-tight text-[#777]">
                        {s.sub}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default DashboardStats;