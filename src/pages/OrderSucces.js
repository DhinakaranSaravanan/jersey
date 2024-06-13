import React from 'react'
import {
    obj
} from '../helper/productData'
import '../styles/Checkout.css'

function OrderSucces() {
    return ( <
        div className = 'order-success' >
        <
        h2 className = 'gray font' > #WS2XJ5584F92X < /h2> <
        h2 className = 'font' > Order Placed! < /h2>

        <
        div className = 'checkout' >

        <
        div className = 'placeorder-details' >
        <
        div className = 'placeorder-summery' >

        <
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
        p style = {
            {
                display: "flex",
                justifyContent: "space-between",
                margin: "1rem auto"
            }
        } > < p > Lorenz Smith < /p> <p>+61 6282864942</p > < /p>    <
        h5 style = {
            {
                textAlign: "left"
            }
        } > 54, Chester Road,
        Tweed Heads South,
        New South Wales,
        Australia 2486 < /h5> <
        div style = {
            {
                height: "80%"
            }
        } >
        <
        p > Payment Type: < span > Card < /span></p >
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
        h4 className = 'colorgre' > You have saved $ 150.00 AUD Today!! < /h4>

        <
        /div>

        <
        /div> <
        /div> <
        /div> <
        /div>

    )
}

export default OrderSucces