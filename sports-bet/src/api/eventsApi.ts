import { EventType } from "../model/event";
import Axios, { AxiosResponse } from "axios";

const baseURL = "http://www.mocky.io";

const eventsUrl = `${baseURL}/v2/59f08692310000b4130e9f71`;
export const getEventsCollection = (): Promise<EventType[]> => {
  const promise = new Promise<EventType[]>((resolve, reject) => {
    try {
      Axios.get<EventType[]>(eventsUrl).then(response =>
        resolve(mapEventListApiToModel(response))
      );
    } catch (ex) {
      reject(ex);
    }
  });

  return promise;
};

const mapEventListApiToModel = ({
  data
}: AxiosResponse<any[]>): EventType[] =>
  data.map(gitHubMember => ({
    id: gitHubMember.id,
    name: gitHubMember.name,
    markets: gitHubMember.markets
  }));
