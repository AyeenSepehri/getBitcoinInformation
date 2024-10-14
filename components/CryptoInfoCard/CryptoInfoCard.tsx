import React from "react";
import Image from "next/image";
import { CoinData } from "./types";
import parse, { DOMNode, Element, Text } from "html-react-parser";
import Link from "next/link";

interface CryptoInfoCardProps {
    coinData: CoinData;
}

export const CryptoInfoCard: React.FC<CryptoInfoCardProps> = ({ coinData }) => {
    // Custom parsing function to add styles to <a> tags
    const parseDescription = (description: string) => {
        return parse(description, {
            replace: (domNode: DOMNode) => {
                if (domNode instanceof Element && domNode.name === "a") {
                    const linkElement = domNode as Element;
                    const href = linkElement.attribs.href;

                    // Find the first child that is of type Text and get its data
                    const firstChild = linkElement.children[0];
                    let linkText = "";

                    if (firstChild instanceof Text) {
                        linkText = firstChild.data; // Safely extract text if it's a Text node
                    }

                    return (
                        <Link href={href} className="text-blue-600 underline">
                            {linkText}
                        </Link>
                    );
                }
            },
        });
    };

    return (
        <div className="flex flex-col justify-center items-center gap-6">
            <Image src={coinData.image.large} alt={"coin logo"} width={104} height={104} />
            <div className="w-full flex flex-col gap-4">
                <div className="flex justify-between items-center">
                    <span className="font-normal">Name:</span>
                    <span className="font-medium">{coinData.name}</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="font-normal">Symbol:</span>
                    <span className="font-medium">{coinData.symbol}</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="font-normal">Price:</span>
                    <span className="font-medium">{coinData.market_data.current_price.usd.toLocaleString()}$</span>
                </div>
                <div className="flex justify-between items-center flex-wrap gap-3">
                    <span className="font-normal">Description:</span>
                    <p className="font-medium">
                        {parseDescription(coinData.description.en)}
                    </p>
                </div>
            </div>
        </div>
    );
};
