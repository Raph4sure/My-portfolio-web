"use client";

import React from "react";
import { Button2 } from "./stateful-button";
// import { Button2 } from "@/submit_button/components/ui/stateful-button";

export function StatefulButtonDemo() {
    // dummy API call
    const handleClick = () => {
        return new Promise((resolve) => {
            setTimeout(resolve, 4000);
        });
    };
    return (
        <div className="flex h-40 w-full items-center justify-center bg">
            <Button2 onClick={handleClick}>Send message</Button2>
        </div>
    );
}
