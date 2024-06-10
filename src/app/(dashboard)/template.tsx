"use client";

import { Navbar } from "@/components";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";


const Template = ({ children }: { children: React.ReactNode }) => {
    const { push } = useRouter();

    let loggedIn = false
    useEffect(() => {
        if (loggedIn) {
            push("")
            return;
        }
    }, [loggedIn]);
    return (
        <div className="h-screen lg:max-w-[70%] sm:max-w-[80%]  max-w-[100%] mx-auto px-[20px] flex flex-col  ">
            <Navbar />
            <div className="h-[calc(100vh - 100px)]">
                {children}
            </div>
        </div>
    );
};

export default Template;
