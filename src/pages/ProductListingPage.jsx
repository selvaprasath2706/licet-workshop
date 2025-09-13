import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const ProductListingPage = () => {
     const [product,setProduct]=useState([])
 
    useEffect(()=>{
 fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => {
        setProduct(json)
    });
    
    },[])
   

  return <div>ProductListingPage
   
   {product?
   product?.map((prod)=>{
    return (
       <ProductCard key={prod.id} props={prod}></ProductCard>

    )
   })
   :"No products to show"}
  </div>;
};

export default ProductListingPage;
