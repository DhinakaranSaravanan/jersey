import React from 'react'
import '../styles/ProductDetails.css'
import Product from '../components/product/Product'
import Slider from "react-slick";
import SampleNextArrow from '../components/slickBtn/SBTN'
import SamplePrevArrow from '../components/slickBtn/SBTNR'
import productlogo from '../assets/product.png'

function ProductDetails() {
    const settings = {
        // dots: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        autoplaySpeed: 2000,
        slidesToShow: 5,
        slidesToScroll: 5,
        nextArrow: < SampleNextArrow / > ,
        prevArrow: < SamplePrevArrow / > ,
        responsive: [{
                breakpoint: 1800,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    // dots: true
                }
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    // dots: true
                }
            },
            {
                breakpoint: 1030,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const productSetting = {
        customPaging: function(i) {
            return ( <
                a >
                <
                img src = {
                    productlogo
                }
                /> <
                /a>
            );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };

    return ( <
        >
        <
        div className = 'detail-container' >
        <
        div className = 'product-details' >
        <
        div className = 'details-container' >
        <
        Slider { ...productSetting
        } >
        <
        img src = {
            productlogo
        }
        /> <
        img src = {
            productlogo
        }
        /> <
        img src = {
            productlogo
        }
        /> <
        img src = {
            productlogo
        }
        /> <
        /Slider> <
        /div> <
        div className = 'details-container' > 2 < /div> <
        /div> <
        div className = 'divder' >
        <
        h1 style = {
            {
                textAlign: 'left'
            }
        }
        className = 'heading' > Explore our other products < /h1>

        <
        /div>

        <
        Slider { ...settings
        } >
        <
        Product / >
        <
        Product / >
        <
        Product / >
        <
        Product / >
        <
        Product / >
        <
        Product / >
        <
        /Slider>


        <
        /div>

        <
        />
    )
}

export default ProductDetails