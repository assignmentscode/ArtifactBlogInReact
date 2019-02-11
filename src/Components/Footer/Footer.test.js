import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import Footer from './Footer';

describe('Footer', ()=> {
    it('should render a footer', ()=>{
        const tree = renderer.create(<Footer/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    const wrapper = shallow(<Footer/>);
    it('should have 1 article', ()=> {
        expect(wrapper.find('article').getElements().length).toEqual(1);
    });
});