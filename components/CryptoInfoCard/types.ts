// Type for the market data section in the Api response
export interface MarketData {
    current_price: {
        usd: number;
    };
}

// Type for the image section in the Api response
export interface CoinImage {
    thumb: string;
    small: string;
    large: string;
}

// Type for the coin data, matching the CoinGecko Api structure
export interface CoinData {
    id: string;
    name: string;
    symbol: string;
    description: {
        en: string;
    };
    image: CoinImage;
    market_data: MarketData;
}
