import React from 'react'
import './product.css'
import pro from '../../assets/product.png'
import { BsFillStarFill } from 'react-icons/bs';

function Product() {
    return ( 
        <>
            <div className = 'product-container boxshadow' >
                <div className = 'product-img' >
                    <img src = { pro } alt = 'product' > </img> 
                </div> 
                <div className = 'product-content' >
                    <h4 > Crossover </h4> 
                    <h6 > $ 39.00 AUD </h6> 
                    <h3 > $ 39.00 AUD </h3> 
                    <div className = 'stars' >
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                    </div>
                </div> 
                <div className = 'readmore' >
                <button > View more </button> 
                </div> 
            </div> 
        </>
    )
}

export default Product