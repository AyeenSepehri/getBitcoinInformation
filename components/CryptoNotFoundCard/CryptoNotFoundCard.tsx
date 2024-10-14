import Image from "next/image";
import NotFoundIcon from "./icons/NotFound.svg"

export const CryptoNotFoundCard = () => {
    return(
        <div className="flex flex-col justify-center items-center gap-6">
            <Image src={NotFoundIcon} alt={"NotFoundIcon"}/>
            <span className="font-medium">
                Symbol not found!
            </span>
        </div>
    )
}