import React from 'react';
import './index.css';

const BookCard = (props) => {



    return(

    <div className="card-container">
      <a href = {props.image}><img src={props.image} alt=""/></a>
      <div className="desc">
        <h2>{props.title}</h2>
        <h3>Author: {props.author}</h3>
        <p>Published Data: {props.published === '0000' ? 'Not available' : props.published.substring(0, 4)}</p>
      </div>
    </div>
  )
    }
export default BookCard;