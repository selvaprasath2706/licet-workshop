import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { Button } from "@/components/ui/button"

const ProductListingPage = () => {
     const [product,setProduct]=useState([])
 
    useEffect(()=>{
 fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => {
        setProduct(json)
    });
    
    },[])
   

  return <div className="">ProductListingPage
   <div className="flex flex-wrap items-center gap-2 md:flex-row">
      <Button className="text-black bg-blue-700">Button</Button>
    </div>
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
