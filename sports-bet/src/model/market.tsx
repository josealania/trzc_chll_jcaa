import { SelectionType } from "./selection";

/** Market Entity */
export type MarketType = {
    id: string;
    name: string;
    selections: SelectionType[];
   }