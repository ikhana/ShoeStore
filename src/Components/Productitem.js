import React from 'react';
import { useParams } from "react-router-dom";
import Shoes from "./../shoes.json";


function ProductItem() {
  const {id} =useParams();
  const shoe =Shoes[id];
  if(!shoe){
    return <h2>Product Not Found</h2>}
  return (
    <div  className="productitem" >
    <h3>{shoe.name}</h3>
    <img src={shoe.img} height={300}></img>
    </div>
  );
}

export default ProductItem;