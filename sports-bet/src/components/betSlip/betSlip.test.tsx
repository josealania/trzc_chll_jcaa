import React from "react";
import ReactDOM from "react-dom";
import BetsMock from "../../api/GetDataMock";
import { Bet } from "../../model/bet";
import BetSlip, { BetRow } from "./betSlip";
import { Provider } from "react-redux";
import configureStore from "../../store";
import { fetchData } from "../../store/actions";
import { shallow,configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
const store = configureStore();
store.dispatch<any>(fetchData());

it('BetSlip zero items renders without crashing', () => {
    const handleMobileDrawerCloseMock = jest.fn();
    const div = document.createElement('div');
    ReactDOM.render(<BetSlip open={true} betItems={[]} onClose={handleMobileDrawerCloseMock}/>, div);
    ReactDOM.unmountComponentAtNode(div);
});
  
it('BetSlip many items renders without crashing', () => {
    const handleMobileDrawerCloseMock = jest.fn();
    const div = document.createElement('div');
    const bets: Bet[] = BetsMock;
    ReactDOM.render(<Provider store={store}><BetSlip open={true} betItems={bets} onClose={handleMobileDrawerCloseMock}/></Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
});


describe('BetSlip bet correctly loaded', () => {
    const handleMobileDrawerCloseMock = jest.fn();
    const div = document.createElement('div');
    const bets: Bet[] = BetsMock;
    const bet: Bet = bets[0];
    const wrapper = shallow(<Provider store={store}><BetRow key={bet.id} bet={bet} /></Provider>);

    describe('renders', () => {
      it('a bet per card', () => {
        const item = wrapper.find(BetRow);     
        expect(item.length).toEqual(1);
        expect(item.props().bet.id).toEqual(bet.id);
        expect(item.props().bet.name).toEqual(bet.name);
        expect(item.props().bet.price).toEqual(bet.price);
      });    
    });
});