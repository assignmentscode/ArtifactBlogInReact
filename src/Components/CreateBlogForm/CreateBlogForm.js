import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CreateBlogForm.css';

class CreateBlogForm extends Component {
    render() {
        return(
          <form className="form-width">
            <ul className="flex-outer">
                      <li>
                        <label for="date-form">Date</label>
                        <input type="date" id="date"/>
                      </li>
                      <li>
                        <label for="read-time">Read Time</label>
                        <input type="text" id="read-time" placeholder="Enter the read time for blog"/>
                      </li>
                      <li>
                        <label for="title">Title</label>
                        <input type="text" id="title" placeholder="Enter the Title of Post"/>
                      </li>
                      <li>
                        <label for="message">Message</label>
                        <textarea rows="6" id="message" placeholder="Enter your message here"></textarea>
                      </li>
                      </ul>
                        <Link to="/">
                          <button type="submit" className="btn-submit">Submit</button>
                        </Link>
          </form>
        );
    }
}
export default CreateBlogForm;