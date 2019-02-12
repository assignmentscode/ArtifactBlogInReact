import React, { Component } from 'react';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';
import CreateBlogForm from './../CreateBlogForm/CreateBlogForm';
import './CreatePostPage.css';

class CreatePostPage extends Component {
    render() {
        return(
            <div>
                <Header/>
                <CreateBlogForm/>
                <Footer/>
            </div>
        );
    }
}

export default CreatePostPage;