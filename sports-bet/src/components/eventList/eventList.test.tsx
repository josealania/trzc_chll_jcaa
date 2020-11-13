import React from "react";
import ReactDOM from "react-dom";
import EventsMock from "../../api/EventsMock";
import { EventComponent, EventRow } from "./eventList";
import configureStore from "../../store";
import { fetchData } from "../../store/actions";
import { shallow,configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { EventType } from "../../model/event";

configure({adapter: new Adapter()});
const store = configureStore();
store.dispatch<any>(fetchData());

it('Events zero items renders without crashing', () => {
    const handleMobileDrawerOpenMock = jest.fn();
    const div = document.createElement('div');
    ReactDOM.render(<EventComponent events={[]} onClose={handleMobileDrawerOpenMock} betDeleteClicked={false} betIdClicked={""}/>, div);
    ReactDOM.unmountComponentAtNode(div);
});
  
it('Events many items renders without crashing', () => {
    const handleMobileDrawerOpenMock = jest.fn();
    const div = document.createElement('div');
    const events: EventType[] = EventsMock;
    ReactDOM.render(<EventComponent events={events} onClose={handleMobileDrawerOpenMock} betDeleteClicked={false} betIdClicked={""}/>, div);
    ReactDOM.unmountComponentAtNode(div);
});


describe('Event bet correctly loaded', () => {
    const handleMobileDrawerOpenMock = jest.fn();
    const div = document.createElement('div');
    const events: EventType[] = EventsMock;
    const event: EventType = events[0];
    const wrapper = shallow(<EventComponent events={events} onClose={handleMobileDrawerOpenMock} betDeleteClicked={false} betIdClicked={""}/>);

    describe('renders', () => {
      it('an event per card', () => {
        const item = wrapper.find(EventRow).first();     
        expect(item.length).toEqual(1);
        expect(item.props().event.id).toEqual(event.id);
        expect(item.props().event.name).toEqual(event.name);
      });    
    });
});