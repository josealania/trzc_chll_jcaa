import React from "react";
import ReactDOM from "react-dom";
import SelectionsMock from "../../api/SelectionsMock";
import { SelectionComponent, SelectionRow } from "./selectionList";
import configureStore from "../../store";
import { fetchData } from "../../store/actions";
import { shallow,configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { SelectionType } from "../../model/selection";

configure({adapter: new Adapter()});
const store = configureStore();
store.dispatch<any>(fetchData());

it('Selections zero items renders without crashing', () => {
    const onCloseMock = jest.fn();
    const div = document.createElement('div');
    ReactDOM.render(<SelectionComponent selections={[]} betMarketName={""} onClose={onCloseMock} betDeleteClicked={false} betIdClicked={""}/>, div);
    ReactDOM.unmountComponentAtNode(div);
});
  
it('Selections many items renders without crashing', () => {
    const onCloseMock = jest.fn();
    const div = document.createElement('div');
    const selections: SelectionType[] = SelectionsMock;
    ReactDOM.render(<SelectionComponent selections={selections} betMarketName={""} onClose={onCloseMock} betDeleteClicked={false} betIdClicked={""}/>, div);
    ReactDOM.unmountComponentAtNode(div);
});

