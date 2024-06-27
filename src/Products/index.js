import ProductCard from "../Atoms/ProductCard";
import { useGetProduct } from "./hooks/useGetProduct";
import React from "react";
import './index.css';
const Products=()=>{
  const{products,error,loading}=useGetProduct();
  console.log({products});
  return(
    <div className="Image">
        {loading && <h2>Loading users ..</h2>}
        {error && <h2>{error}</h2>}
        {products.length>0 ? products.map((product)=>(
           <ProductCard
           key={product.id}
           image={product.image}
           title={product.title} 
           />
        )):! loading && <h2>No product found</h2>}
    </div>
  )
}

export default Products;