import React from "react";
import Image from "next/image";

interface CryptoInfoCardProps {
    coinData: any;
}

export const CryptoInfoCard: React.FC<CryptoInfoCardProps> = ({ coinData }) => {
console.log(coinData.market_data.current_price.usd)
    return(
        <div className="flex flex-col justify-center items-center gap-6">
            <Image src={coinData.image.large} alt={"coin logo"} width={104} height={104}/>
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
                    <span className="font-medium">{coinData.market_data.current_price.usd}</span>
                </div>
                <div className="flex justify-between items-center flex-wrap gap-3">
                    <span className="font-normal">Description:</span>
                    <span className="font-medium">{coinData.description.en}</span>
                </div>
            </div>
        </div>
    )
}