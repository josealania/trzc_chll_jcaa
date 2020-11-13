import { EventType } from "../../model/event";

export const ADD_BET = "ADD_BET";
export const REMOVE_BET = "REMOVE_BET";
export const ADD_FETCHED_DATA = "ADD_FETCHED_DATA";

interface AddBet {
  type: typeof ADD_BET;
  payload: {
    name: string;
    price:number;
    id: string;
  };
}

interface RemoveBet {
  type: typeof REMOVE_BET;
  payload: {
    id: number;
  };
}

interface AddFetchedData {
  type: typeof ADD_FETCHED_DATA;
  payload: {
    events: EventType[];
  };
}

export type EventActionTypes = AddFetchedData ;

export type BetActionTypes = AddBet | RemoveBet;
