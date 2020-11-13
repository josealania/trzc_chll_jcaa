import { EventState } from '../state/eventState';
import { EventActionTypes, ADD_FETCHED_DATA } from '../actions/action-types';

const initialState: EventState = {
    events: []
  };
export default function eventsReducer(state = initialState, action: EventActionTypes): EventState {
    switch (action.type) {
      case ADD_FETCHED_DATA:{
      const { events } =action.payload;
          return { events };
      }
      default:
        return { ...state };
    }
  }