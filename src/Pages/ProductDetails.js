import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct,RemoveProduct, addToCart } from '../Redux/actions/Actions';


const ProductDetails = () => {

    const product = useSelector((state) => state.product);
    const {Add,setAdd} = useState('');
    const dispatch = useDispatch();
    const {productId} = useParams();

    const fetchProductDetails = async () => {
        const responce = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch((err) => 
        {console.loga("Err", err)
    })
    
        dispatch(selectedProduct(responce.data));

        if (Add) {
            dispatch(addToCart(responce.data));
        }
    }

useEffect(() => {
    if(productId && productId !=="") fetchProductDetails();
    return () => {
        dispatch(RemoveProduct());
    }
}, [productId]);

    return (
        <div>
            {( Object.keys(product).length === 0) ? (<div>...Looding</div>) : (
                <div>
                <div className='row m-t3 mb-5'>

                    <div className='col-6 img' style={{border:"solid 2px #eee"}}>
                        <img className="card-img-top" src={product.image} alt='...' />
                    </div>

                    <div className='col-6 title' style={{border:"solid 2px #eee"}}>
                        <h2 className='p-3 title'>{product.title}</h2>
                        <div className='p-3 m-4 price'>${product.price}</div>
                        <div className=' p-3 m-4 category'> {product.category}</div>
                        <p className=' p-3 mt-4 des'>{product.description}</p>
                        <br/>
                        <button type="button" onClick={setAdd('Add')} className="w-100 mb-4 btn btn-danger btn-lg">Add To Cart </button>
                    </div>
                </div>
            </div>
            )
            
            }
        </div>
    )
}

export default ProductDetails;