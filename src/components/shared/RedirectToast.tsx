"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { toast } from 'react-hot-toast';

const RedirectToast = () => {
    const searchParams = useSearchParams();
    const reason = searchParams.get("reason");

    useEffect(() => {
        if (reason === "auth-required") {
            toast.error("এই পেজটি দেখতে প্রথমে সাইন ইন করুন।", {
                id: "protected-redirect",
            });
        }
    }, [reason]);

    // useEffect(() => {
    //     if (searchParams.get("reason") === "auth-required") {
    //         toast.error("এই পেজটি দেখতে প্রথমে সাইন ইন করুন।");
    //     }
    // }, [searchParams]);

    return null;
};

export default RedirectToast;