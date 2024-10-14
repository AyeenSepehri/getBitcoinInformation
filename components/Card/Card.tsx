import React from "react";

interface CardProps {
    title: string;
    width: number;
    children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({width , title , children}) => {
    console.log(width)
    return(
        <div
            className="bg-white shadow-lg p-10 flex flex-col gap-8 rounded-3xl"
            style={{ width: `${width}px` }}
        >
            <div className="border-b border-b-gray-400 pb-4">
                <span className="font-semibold text-xl text-neutral-800">
                    {title}
                </span>
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}