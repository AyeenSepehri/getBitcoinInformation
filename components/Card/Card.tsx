import React from "react";

interface CardProps {
    title: string;
    width: number;
    children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ width, title, children }) => {
    return (
        <div
            className="bg-white shadow-md p-6 sm:p-10 flex flex-col gap-6 sm:gap-8 rounded-2xl sm:rounded-3xl w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl"
            style={{ maxWidth: `${width}px` }} // This will apply only on larger screens
        >
            <div className="border-b border-b-gray-200 pb-4">
                <span className="font-semibold text-lg sm:text-xl text-neutral-800">
                    {title}
                </span>
            </div>
            <div>
                {children}
            </div>
        </div>
    );
};
