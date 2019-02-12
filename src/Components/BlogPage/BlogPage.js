import React, { Component } from 'react';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';
import Card from './../Card/Card';
import './BlogPage.css';

class BlogPage extends Component {
    render(){
        const cards = this.props.Blogdata.map((cardData) => {
            return (<Card data={cardData} key={cardData.title}/>);
        });
        return(
            <div>
                <Header/>
                <div className="div-blogs content-width">
                    {cards}
                </div>
                <div className="btn-class">
                    <button className="btn">Post New Blog</button>
                </div>
                <Footer/>
            </div>
        );
  }
}

export default BlogPage;