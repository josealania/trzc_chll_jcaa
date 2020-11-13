import { ADD_BET, REMOVE_BET } from "./action-types";

export function addBet(name: string, price:number, id:string) {
  return {
    type: ADD_BET,
    payload: { name,price,id }
  };
}

export function removeBet(id: string) {
  return {
    type: REMOVE_BET,
    payload: { id }
  };
}

