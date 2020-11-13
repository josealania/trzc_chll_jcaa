import { EventType } from "../model/event";

const EventsMock: EventType[] = [
    {
    id: "EVT_1",
    name: "Real Madrid vs Barcelona",
    markets: [
      {
        id: "MKT_1",
        name: "Team to Win",
        selections: [
          {
            id: "SEL_1",
            name: "Real Madrid",
            price: 1.23,
            changeColor: false
          },
          {
            id: "SEL_2",
            name: "Barcelona",
            price: 2.05,
            changeColor: false
          }
        ]
      },
      {
        id: "MKT_2",
        name: "Player to Score First",
        selections: [
          {
            id: "SEL_3",
            name: "Ronaldo",
            price: 1.15,
            changeColor: false
          },
          {
            id: "SEL_4",
            name: "Messi",
            price: 1.30,
            changeColor: false
          },
          {
            id: "SEL_5",
            name: "Bale",
            price: 1.35,
            changeColor: false
          }
        ]
      }
    ]
  },
  {
    id: "EVT_2",
    name: "Atletico Madrid vs Malaga",
    markets: [
      {
        id: "MKT_3",
        name: "Team to Win",
        selections: [
          {
            id: "SEL_6",
            name: "Atletico",
            price: 1.40,
            changeColor: false
          },
          {
            id: "SEL_7",
            name: "Malaga",
            price: 3.05,
            changeColor: false
          }
        ]
      }
    ]
  },
  {
    id: "EVT_3",
    name: "Empty Event that shouldn't render",
    markets: []
  }
  ];
  
  export default EventsMock;