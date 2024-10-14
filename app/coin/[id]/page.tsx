import axios from "axios";
import {Card} from "@/components/Card/Card";
import {CryptoInfoCard} from "@/components/CryptoInfoCard/CryptoInfoCard";
import {CryptoNotFoundCard} from "@/components/CryptoNotFoundCard/CryptoNotFoundCard";
import {CoinData} from "@/components/CryptoInfoCard/types";

// serverside function for fetching data
const getCoinData = async (id: string): Promise<CoinData | null> => {
    try {
        const res = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`);
        return res.data as CoinData;
    } catch (error) {
        console.error("Error fetching data from the backend:", error);
        return null; // if there is an error
    }
};

const CoinPage = async ({params}: { params: { id: string } }) => {
    // taking data from Api
    const coinData = await getCoinData(params.id);

    // check if the requested coin not found
    if (!coinData) {
        return (
            <div className="grid place-items-center h-screen">
                <Card title={"Not Found"} width={604}>
                    <CryptoNotFoundCard/>
                </Card>
            </div>
        );
    }

    // if the requested coin found
    return (
        <div className="grid place-items-center h-screen">
            <Card title={coinData.name} width={604}>
                <CryptoInfoCard coinData={coinData}/>
            </Card>
        </div>
    );
};

export default CoinPage;