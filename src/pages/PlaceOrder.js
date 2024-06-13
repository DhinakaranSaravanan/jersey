import React from 'react'
import '../styles/PlaceOrder.css'
import InputWithLable from '../components/inputWithLable/InputWithLable'
import {
    obj
} from '../helper/productData'

function PlaceOrder() {
    return ( <
        div >
        <
        div className = 'placeOrder' >
        <
        div className = 'custom-user-details' >
        <
        h4 style = {
            {
                textAlign: "center"
            }
        } > Shipping Details < /h4> <
        InputWithLable type = {
            "text"
        }
        placeholder = {
            "Name "
        }
        /> <
        div className = 'checking' >
        <
        InputWithLable type = {
            "email"
        }
        placeholder = {
            "Email-ID  "
        }
        /> <
        InputWithLable type = {
            "text"
        }
        placeholder = {
            "Phone  "
        }
        /> <
        /div>


        <
        InputWithLable type = {
            "text"
        }
        placeholder = {
            "Address line 1 "
        }
        /> <
        InputWithLable type = {
            "text"
        }
        placeholder = {
            "Address line 2 "
        }
        /> <
        div className = 'checking2' >
        <
        InputWithLable type = {
            "text"
        }
        placeholder = {
            "City "
        }
        /> <
        InputWithLable type = {
            "text"
        }
        placeholder = {
            "State/Province "
        }
        /> <
        InputWithLable type = {
            "text"
        }
        placeholder = {
            "Zip/Postal code "
        }
        /> <
        /div> <
        InputWithLable type = {
            "text"
        }
        placeholder = {
            "Country "
        }
        />

        <
        /div> <
        div className = 'custom-user-details' >
        <
        h4 style = {
            {
                textAlign: "center",
                color: "#fff"
            }
        } > Billing Details < /h4> <
        InputWithLable type = {
            "text"
        }
        placeholder = {
            "Name "
        }
        /> <
        div className = 'checking' >
        <
        InputWithLable type = {
            "email"
        }
        placeholder = {
            "Email-ID  "
        }
        /> <
        InputWithLable type = {
            "text"
        }
        placeholder = {
            "Phone  "
        }
        /> <
        /div>


        <
        InputWithLable type = {
            "text"
        }
        placeholder = {
            "Address line 1 "
        }
        /> <
        InputWithLable type = {
            "text"
        }
        placeholder = {
            "Address line 2 "
        }
        /> <
        div className = 'checking2' >
        <
        InputWithLable type = {
            "text"
        }
        placeholder = {
            "City "
        }
        /> <
        InputWithLable type = {
            "text"
        }
        placeholder = {
            "State/Province "
        }
        /> <
        InputWithLable type = {
            "text"
        }
        placeholder = {
            "Zip/Postal code "
        }
        /> <
        /div> <
        InputWithLable type = {
            "text"
        }
        placeholder = {
            "Country "
        }
        />

        <
        /div> <
        /div> <
        div className = 'retrun' >
        <
        div className = 'divder' >
        <
        h4 className = 'heading'
        style = {
            {
                textAlign: "left",
                margin: "1rem auto"
            }
        } > Returns and cancellations < /h4> <
        p className = ''
        style = {
            {
                fontSize: "12px",
                color: "#686464"
            }
        } > If you’ re looking to
        return or cancel your order, we’ re here to help!We will happily offer a refund, store credit or exchange within 30 days of purchase
        if the item has arrived damaged, faulty or the product isn 't as described.We do not offer these return options on "Change of mind" situations as all our products are custom made.All orders will be followed up with an email for customer approval before manufacturing process begins.</p> <
        /div> <
        button > Read more < /button> <
        /div>


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
        h4 style = {
            {
                textAlign: "center"
            }
        } > Payment Summary < /h4> <
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
        button > Place Order < /button> <
        /div>

        <
        /div> <
        /div>

        <
        /div>
    )
}

export default PlaceOrder