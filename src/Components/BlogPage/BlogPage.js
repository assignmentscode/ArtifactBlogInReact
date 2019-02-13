import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';
import Card from './../Card/Card';
import './BlogPage.css';
const axios = require('axios');

class BlogPage extends Component {
    state = {
        Blogdata : [],
      }
    storeData = (responseObject) => this.setState({Blogdata: responseObject});
    componentDidMount () {
        return axios.get('https://api.myjson.com/bins/hc5ye')
        .then((result)=>this.storeData(result.data));
    }
    render(){
        const cards = this.state.Blogdata.map((cardData) => {
            return (<Card data={cardData} key={cardData.title}/>);
        });
        return(
            <div>
                <Header/>
                <div className="div-blogs content-width">
                    {cards}
                </div>
                <div className="btn-class">
                    <Link to ="/posts">
                        <button className="btn">Post New Blog</button>
                    </Link>
                </div>
                <Footer/>
            </div>
        );
  }
}

export default BlogPage;