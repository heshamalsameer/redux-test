import React from 'react'
import { useSelector } from 'react-redux';
import {Link} from "react-router-dom";



const ProductItem = () => {
    const products = useSelector((state) => state.allProducts.products);
    const renderList = products.map((ele) => {
        const {id,image,title,price,category} = {...ele};
        return (
                <div  className="card d-grid col-3 mb-4" key={id}>
                    <Link to={`/product/${id}`}>
                    <img src={image} className="card-img-top" alt="..." />
                    </Link>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{price}</p>
                        <div>{category}</div>
                    </div>
                </div>
        )
    })


    return (
        <>{renderList}</>
    )
}

export default ProductItem;