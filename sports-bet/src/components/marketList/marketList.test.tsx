import React from "react";
import ReactDOM from "react-dom";
import MarketsMock from "../../api/MarketsMock";
import { MarketComponent, MarketRow } from "./marketList";
import configureStore from "../../store";
import { fetchData } from "../../store/actions";
import { shallow,configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MarketType } from "../../model/market";
import { Card } from "@material-ui/core";

configure({adapter: new Adapter()});
const store = configureStore();
store.dispatch<any>(fetchData());

it('Markets zero items renders without crashing', () => {
    const onCloseMock = jest.fn();
    const div = document.createElement('div');
    ReactDOM.render(<MarketComponent markets={[]}  onClose={onCloseMock} betDeleteClicked={false} betIdClicked={""}/>, div);
    ReactDOM.unmountComponentAtNode(div);
});
  
it('Markets many items renders without crashing', () => {
    const onCloseMock = jest.fn();
    const div = document.createElement('div');
    const markets: MarketType[] = MarketsMock;
    ReactDOM.render(<MarketComponent markets={markets}  onClose={onCloseMock} betDeleteClicked={false} betIdClicked={""}/>, div);
    ReactDOM.unmountComponentAtNode(div);
});