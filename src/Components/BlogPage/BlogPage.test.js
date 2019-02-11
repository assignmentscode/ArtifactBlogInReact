import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import BlogPage from './BlogPage';

describe('BlogPage', ()=> {
    it('should render a complete webPage', ()=>{
        const tree = renderer.create(<BlogPage/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    const wrapper = shallow(<BlogPage/>);
    it('should have 2 items in div', ()=> {
        expect(wrapper.find('div').getElements()[0].props.children.length).toEqual(2);
    });
});