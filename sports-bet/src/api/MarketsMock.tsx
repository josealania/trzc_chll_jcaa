import { MarketType } from "../model/market";

const MarketsMock: MarketType[] = [
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
      }
  ];
  
  export default MarketsMock;