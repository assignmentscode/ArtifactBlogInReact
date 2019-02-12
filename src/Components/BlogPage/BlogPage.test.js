import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import BlogPage from './BlogPage';
const BlogData = require('./../../mockData/index.json');

describe('BlogPage', ()=> {
    it('should render a complete webPage', ()=>{
        const tree = renderer.create(<BlogPage Blogdata={BlogData}/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    const wrapper = shallow(<BlogPage Blogdata={BlogData}/>);
    it('should have more than 2 items in div', ()=> {
        expect(wrapper.find('div').getElements()[0].props.children.length > 2).toEqual(true);
    });
    it('should have another div tag as child of div tag', ()=> {
        // console.log(wrapper.find('Card').getElements());
        expect(wrapper.find('Card').getElements().length > 0).toEqual(true);
    });
    it('should have 3 div elements', () => {
        expect(wrapper.find('div').getElements().length).toEqual(3);
    });
});