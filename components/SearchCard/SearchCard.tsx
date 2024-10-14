"use client"
import React ,  { useState } from "react";
import { useRouter } from "next/navigation";

export const SearchCard = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const router = useRouter();

    const handleSearch = () => {
        if (searchTerm) {
            router.push(`/coin/${searchTerm}`);
        }
    };
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleSearch();
        }
    };

    return(
        <div className="flex flex-col gap-8">
            <p className="text-neutral-800">
                Enter Symbol Name and Search:
            </p>
            <input
                type="text"
                placeholder="Symbol Name"
                className="border border-gray-400 rounded py-3 px-5 w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <button
                className="flex justify-center items-center text-white bg-blue-600 rounded py-3 px-5 w-full"
                onClick={handleSearch}
            >
                Search
            </button>
        </div>
    )
}