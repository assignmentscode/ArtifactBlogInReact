import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import App from '../Components/BlogPage/BlogPage';
import Form from '../Components/CreatePostPage/CreatePostPage';

//export const routing = (
    const Routing = () => (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route exact path="/posts" component={Form} />
      </div>
    </Router>
    );
  export default Routing;