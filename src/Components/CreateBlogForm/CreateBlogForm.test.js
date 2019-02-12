import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import CreateBlogForm from './CreateBlogForm';

describe('CreateBlogForm', ()=> {
    it('should render form for creating Blog Post', ()=> {
        const tree = renderer.create(<CreateBlogForm />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    const wrapper = shallow(<CreateBlogForm/>);
    it('should have 5 list items element', () => {
        expect(wrapper.find('li').getElements().length).toEqual(5);
    });
});