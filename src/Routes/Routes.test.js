import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import {shallow, mount} from 'enzyme';
import Routing from './Routes';
import BlogPage from '../Components/BlogPage/BlogPage';
import CreatePostpage from  '../Components/CreatePostPage/CreatePostPage';

const reactRouterDom = require('react-router-dom');

describe('Routes', ()=> {
    const wrapper = shallow(<Routing />);
    beforeAll(()=>{
        reactRouterDom.BrowserRouter = ({children})=>(<div>{children}</div>)
    })
    it('should render a shallow snapshot', ()=> {
        expect(wrapper).toMatchSnapshot();
    });
    it('should render create page', () => {
        const wrapper = mount(
          <MemoryRouter initialEntries={['/posts']}>
           <Routing />
          </MemoryRouter>
        );
        expect(wrapper.find(CreatePostpage)).toHaveLength(1);
        expect(wrapper.find(BlogPage)).toHaveLength(0);
      });
      it('should render home page of blog', () => {
        const wrapper = mount(
          <MemoryRouter initialEntries={['/']}>
           <Routing />
          </MemoryRouter>
        );
        expect(wrapper.find(CreatePostpage)).toHaveLength(0);
        expect(wrapper.find(BlogPage)).toHaveLength(1);
      });
});