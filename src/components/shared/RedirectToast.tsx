"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { toast } from 'react-hot-toast';

const RedirectToast = () => {
    const searchParams = useSearchParams();
    const reason = searchParams.get("reason");

    useEffect(() => {
        if (reason === "protected") {
            toast.error("এই পেজটি দেখতে প্রথমে সাইন ইন করুন।", {
                id: "protected-redirect",
            });
        }
    }, [reason]);

    return null;
};

export default RedirectToast;