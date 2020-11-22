import React from 'react';
import Shoes from "./../shoes.json";
import {Link} from "react-router-dom";




function Product() {
    console.log(Shoes)
  return (
    <div>
           <div className="productContainer">
               {Object.keys(Shoes).map(keyName=>{
                   const shoe =Shoes[keyName];
                   return(<Link key={keyName} className="link" to={`product/${keyName}`}>
                       <h3>{shoe.name}</h3>
                       <img src={shoe.img} height={250} alt="Shoes "></img>
                       </Link>
                   )
               })}
           </div>
      
    </div>
 
  );
}

export default Product;