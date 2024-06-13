import React from 'react'
import {
    obj
} from '../helper/productData'
import '../styles/Checkout.css'

function Checkout() {
    return ( <
        div className = 'checkout' >

        <
        div className = 'placeorder-details' >
        <
        div className = 'placeorder-summery' >
        <
        h1 > My Cart < /h1> <
        table >
        <
        tr >
        <
        th > Image < /th> <
        th > Product Name < /th> <
        th > Qty < /th> <
        th > Size < /th> <
        /tr>

        {
            obj.map((data, i) => {
                return <tr key = {
                        i
                    } >
                    <
                    td >
                    <
                    div style = {
                        {
                            width: "60px",
                            height: "60px"
                        }
                    } >
                    <
                    img src = {
                        data.img
                    }
                alt = 'img' > < /img> 

                    <
                    /div> <
                    /td> <
                    td >
                    <
                    h4 > {
                        data['product-details'].name
                    } < /h4> <
                    p style = {
                        {
                            fontSize: "12px",
                            margin: ".3rem 0"
                        }
                    } > {
                        data['product-details'].category
                    } < /p>  <
                    h6 > {
                        data['product-details'].price
                    } < /h6>

                    <
                    /td> <
                    td > {
                        data.qty
                    } < /td> <
                    td > {
                        data.size
                    } < /td> <
                    /tr>
            })
        } <
        /table> <
        /div>

        <
        div className = 'placeorder-price' >
        <
        h4 style = {
            {
                textAlign: "center"
            }
        } > Order Summary < /h4> <
        div >
        <
        p > Items < span > 351.00 AUD < /span></p >
        <
        p > Delivery < span > 351.00 AUD < /span></p >
        <
        h6 style = {
            {
                textAlign: "right"
            }
        }
        className = 'colorgre' > Free < /h6> <
        hr / >
        <
        p > Total < span > 351.00 AUD < /span></p >
        <
        h6 className = 'colorgre' > You have saved $ 150.00 AUD Today!! < /h6> <
        button > Check Out < /button> <
        /div>

        <
        /div> <
        /div> <
        /div>
    )
}

export default Checkout