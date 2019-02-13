import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router} from 'react-router-dom';
import {shallow} from 'enzyme';
import BlogPage from './BlogPage';
const BlogData = require('./../../mockData/index.json');

describe('BlogPage', ()=> {
    it('should render a complete webPage', ()=>{
        const tree = renderer.create(<Router><BlogPage Blogdata={BlogData}/></Router>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    const wrapper = shallow(<Router><BlogPage Blogdata={BlogData}/></Router>);
    it('should have more than 2 items in div', ()=> {
        expect(wrapper.find('div').getElements()[0].props.children.length > 2).toEqual(true);
    });
    it('should have another div tag as child of div tag', ()=> {
        //console.log(wrapper.find('Card').getElements());
        expect(wrapper.find('Card').getElements().length > 0).toEqual(true);
    });
    it('should have 3 div elements', () => {
        //console.log(wrapper.find('div').getElements());
        expect(wrapper.find('div').getElements().length>1).toEqual(true);
    });
    it('should have the initial state empty', () =>{
        const wrapper = shallow(<Router><BlogPage/></Router>);
        expect(wrapper.instance().state.Blogdata).toEqual([]);
      });
      it('should now modify the initial state', async ()=> {
        await wrapper.instance().componentDidMount();
        expect(wrapper.instance().state.Blogdata.length>0).toEqual(true);
      });
});