import React, { useEffect} from 'react'
import { useDispatch } from 'react-redux';
import {setProducts} from "../Redux/actions/Actions";
import axios from 'axios';
import ProductItem from "./ProductComponent";


const ProductList = () => {

    const dispatch = useDispatch();
    const fetchProducts = async () => {
        const responce = await axios.get("https://fakestoreapi.com/products").catch((err) => {
            console.loga("Err", err);
        })

    dispatch(setProducts(responce.data));
    }

    useEffect (() => {fetchProducts();},[]);

    return (
        <div>
            <h1>Products</h1>
            <div className='row'>
                <ProductItem/>
            </div>
        </div>

    )
}

export default ProductList;