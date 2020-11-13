import { ADD_FETCHED_DATA } from './action-types';
import { Dispatch } from 'react';
import { getEventsCollection } from "../../api/eventsApi";

export const fetchData = () => {
    return async (dispatch: Dispatch<any>) => {
        try {
            const response = await getEventsCollection();
            const data = response;
            dispatch({
                type: ADD_FETCHED_DATA,
                payload: { events: data }
            });
        } catch (error) {
            throw (error);
        }
    };
};
