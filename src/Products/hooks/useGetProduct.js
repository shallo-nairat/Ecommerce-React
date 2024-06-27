import { useState, useEffect } from "react"
import { getProduct } from "../utils";

export const useGetProduct=()=>{
    const [products,setProducts]=useState([]);
    const [error,setError] =useState('');
    const [loading,setLoading]=useState(false);
    useEffect(()=>{
        const fetchProducts = async()=>{
            try{
                setLoading(true);
                const result = await getProduct();
                console.log({result});
                setProducts(result);
                setLoading(false);
            }

            catch(error){
                setError(`Error:${error.message}`)
                setLoading(false);
            }
        };
        fetchProducts();
    },[]);
    return {products,error,loading}
}