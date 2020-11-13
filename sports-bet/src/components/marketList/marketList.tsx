import * as React from "react";
import { MarketType } from "../../model/market";
import { SelectionComponent } from "../selectionList/selectionList";
import { Card,Typography } from "@material-ui/core";
import styles from "./Market.module.scss";

const useMarketCollection = () => {
  const [marketCollection, setMarketCollection] = React.useState<
    MarketType[]
  >([]);

  const loadMarketCollection = async (markets: MarketType[]) => {
    const marketCollection = markets;
    setMarketCollection(marketCollection);
  };

  return { marketCollection: marketCollection, loadMarketCollection: loadMarketCollection };
};

interface Markets {
  markets: MarketType[];
  onClose: any;
  betDeleteClicked:boolean;
  betIdClicked:string;
}
export const MarketComponent : React.FunctionComponent<Markets> = markets => {
  const { marketCollection, loadMarketCollection } = useMarketCollection();

  React.useEffect(() => {
    loadMarketCollection(markets.markets);
  }, [markets,loadMarketCollection]);
  
  return (
    <>
        {marketCollection.map((market) => (
            <Card key={market.id} className={styles.card}>
                    <MarketRow market={market} />
                    <SelectionComponent selections={market.selections} betMarketName={market.name} onClose={markets.onClose} betDeleteClicked={markets.betDeleteClicked} betIdClicked={markets.betIdClicked}/>
            </Card>
        ))}
    </>
  );
};

export const MarketRow = ({ market }: { market: MarketType }) => {
  
  return (
    <Typography className={styles.eventTitle}>{market.name}</Typography>
  );
};
