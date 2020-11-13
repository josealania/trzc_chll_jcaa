import * as React from "react";
import { EventType } from "../../model/event";
import { MarketComponent } from "../marketList/marketList";
import { Typography,Card } from "@material-ui/core";
import styles from "./Event.module.scss";

interface Events {
  events: EventType[];
  onClose: any;
  betDeleteClicked:boolean;
  betIdClicked:string;
}
export const EventComponent: React.FunctionComponent<Events> = events  => {

  return (
    <>
      <div>
          {events.events.filter(event => event.markets.length>0).map((event) => (
            <Card key={event.id} className={styles.card}>              
                  <EventRow event={event} />
                  <MarketComponent markets={event.markets}  onClose={events.onClose} betDeleteClicked={events.betDeleteClicked} betIdClicked={events.betIdClicked}/>              
            </Card>
          ))}
      </div>
    </>
  );
};

export const EventRow = ({ event }: { event: EventType }) => {
  return (
      <Typography variant="h5" className={styles.eventTitle}>{event.name}</Typography>
  );
};
