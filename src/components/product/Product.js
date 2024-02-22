// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Detail from "../productdetail/Detail";
import React from "react";


const Product=({item,search,addtocart})=>{ 

  return (
    <div className="product">
      { item.filter((title)=>{
        return search.toString().toLowerCase() === '' ? title: title.toString().toLowerCase().includes(search) 
      }).map((detail,searchdata) => {
        const {title, description, price, images } = detail;
        return (
          <div
            className="product"
            style={{ display: "flex", gap: "50px", marginBottom: "20px" }}
          >
            <div className="img">
              <img src={images[0]} height="200px" width="200px" alt="" />
            </div>
            <div className="product-details">
              <div className="title" style={{ fontSize: "22px" }}>
                {title}
              </div>
              <div
                className="description"
                style={{ fontSize: "14px", color: "gray" }}
              >
                {description}
              </div>
              <div className="price" style={{ fontSize: "32px" }}>
                ${price}
              </div>
              <button
                className="add"
               onClick={()=>{addtocart(detail)}}
                style={{ height: "30px", border: "none" }}
              >
                Add to Cart
              </button>
            </div>

          </div>
        );
      })}

    </div>
  );
};

export default Product;
