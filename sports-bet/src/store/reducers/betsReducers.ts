import { BetState } from "../state/betState";
import { BetActionTypes, ADD_BET, REMOVE_BET } from "../actions/action-types";

const initialState: BetState = {
  bets: [],
  betDeleteClicked:false,
  betIdClicked:""
};

export default function betsReducer(state = initialState, action: BetActionTypes): BetState {
  switch (action.type) {
    case ADD_BET: {
      const { name,price,id } = action.payload;
      const newTodos = [
        {
          name,
          price,
          id
        },
        ...state.bets
      ];
      return { bets: newTodos, betDeleteClicked:false,betIdClicked:"" };
    }
    case REMOVE_BET: {
      const { id } = action.payload;
      const todoIndex = state.bets.findIndex(todo => String(todo.id) === String(id));
      if (todoIndex !== -1) {
        const todos = [...state.bets];
        todos.splice(todoIndex, 1);
        return { bets:todos, betDeleteClicked:true,betIdClicked:String(id) };
      }
      return { ...state };
    }
    default:
      return { ...state };
  }
}
