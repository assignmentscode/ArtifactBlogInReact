import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import Card from './Card';
const BlogData = require('./../../mockData/index.json');

describe('Card', ()=> {
    it('should render one exactly card', ()=> {
        const tree = renderer.create(<Card data={BlogData[0]}/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    const wrapper = shallow(<Card data={BlogData[0]}/>);
    it('should not have any props to be empty', ()=> {
        // console.log(wrapper.instance().props.data);
        const propData = wrapper.instance().props.data;
        expect(propData).toBeDefined();
    });
    it('should have 8 child of div element', () => {
        // console.log(wrapper.find('div').getElement().props.children.length);
        expect(wrapper.find('div').getElement().props.children.length).toEqual(8);
    });
});