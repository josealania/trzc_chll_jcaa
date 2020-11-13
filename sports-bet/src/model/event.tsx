import { MarketType } from "./market";

/** Event Entity */
export type EventType = {
 id: string;
 name: string;
 markets: MarketType[];
};
