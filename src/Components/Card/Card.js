import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
    render(){
        const clapIcon = require('./../../Icons/clapping.svg');
        const blackHeart = require('./../../Icons/heart-black.svg');
        const redHeart = require('./../../Icons/heart-red.svg');
        const imagePath = require('./../../Images/'.concat(this.props.data.image));
        const dateData = this.props.data.date;
        const readingTimeData = this.props.data.readingTime;
        const titleData = this.props.data.title;
        const descriptionData = this.props.data.description;
        const clapsData = this.props.data.claps;
        const likedData = this.props.data.liked;

        return(
            <div className="card">
                <img src={imagePath} alt="John" className="blog-image"/>
                <figcaption>
                    <span className="date">{dateData}</span>
                    <span className="read-time">{readingTimeData}</span>
                </figcaption>
                <p className="post-heading">{titleData}</p>
                <p className="blog-content">{descriptionData}</p>
                <hr/>
                <img src={clapIcon} alt="Clap" className="clap-logo"/>
                <span className="clap-count">{clapsData}</span>
                <img src={(likedData===true)?redHeart:blackHeart} alt="Heart" className="heart-logo"/>
            </div>
        );
  }
}

export default Card;