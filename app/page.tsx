import {Card} from "@/components/Card/Card";
import {SearchCard} from "@/components/SearchCard/SearchCard";

export default function Home() {
  return (
    <div className="grid place-items-center h-screen">
      <Card title={"Crypto"} width={604}>
          <SearchCard/>
      </Card>
    </div>
  );
}
