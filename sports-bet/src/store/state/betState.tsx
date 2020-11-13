import { Bet } from "../../model/bet";

export interface BetState {
  bets: Bet[];
  betDeleteClicked:boolean;
  betIdClicked: string;
}