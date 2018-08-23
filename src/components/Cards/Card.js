import React from 'react';

const Card = ({type,item}) =>{
 return(
 <div  className={"col " + (type ? 'offset-s4 s4' : 's3')}>
    <div className="card">
      <div className="card-image">
        <img src={type ? item.image_url:item.images.original.url} alt={item.title}/>
        <span className="card-title">{item.title}</span>
      </div>
      <div className="card-content">
        <p>{item.title}</p>
      </div>
    </div>
  </div>
)};

export default Card;