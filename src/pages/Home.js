import React from 'react'
import '../styles/Home.css'
import club1 from '../assets/club1.png'
import club2 from '../assets/club2.png'
import club3 from '../assets/club3.png'
import club4 from '../assets/club4.png'
import res1 from '../assets/res1.png'
import res3 from '../assets/res3.png'
import res2 from '../assets/res2.png'
import home from '../assets/home.png'
import home2 from '../assets/home_overlay1.png'
import home3 from '../assets/home_overlay2.png'
import home_slider from '../assets/home_slider.png'
import Product from '../components/product/Product'
import Slider from "react-slick";
import SampleNextArrow from '../components/slickBtn/SBTN'
import SamplePrevArrow from '../components/slickBtn/SBTNR'

function Home() {
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

    const setting2 = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        // nextArrow: <SampleNextArrow />,
        // prevArrow: <SamplePrevArrow />,
        responsive: [{
                breakpoint: 1800,
                settings: {
                    // slidesToShow: 4,
                    // slidesToScroll: 4,
                    // infinite: false
                    // dots: true
                }
            },
            {
                breakpoint: 1400,
                settings: {
                    // slidesToShow: 3,
                    // slidesToScroll: 3,
                    // infinite: false
                    // dots: true
                }
            },
            {
                breakpoint: 1030,
                settings: {
                    // slidesToShow: 2,
                    // slidesToScroll: 2,
                    // initialSlide: 2
                }
            },
            {
                breakpoint: 700,
                settings: {
                    // slidesToShow: 1,
                    // slidesToScroll: 1
                }
            }
        ]
    };
    const setting3 = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        // arrows: false,
        nextArrow: < SampleNextArrow / > ,
        prevArrow: < SamplePrevArrow / > ,
        appendDots: dots => <ul className = 'dotss' > {
            dots
        } </ul>,
        responsive: [{
                breakpoint: 1800,
                settings: {
                    // slidesToShow: 4,
                    // slidesToScroll: 4,
                    // infinite: false
                    // dots: true
                }
            },
            {
                breakpoint: 1400,
                settings: {
                    // slidesToShow: 3,
                    // slidesToScroll: 3,
                    // infinite: false
                    // dots: true
                }
            },
            {
                breakpoint: 1030,
                settings: {
                    // slidesToShow: 2,
                    // slidesToScroll: 2,
                    // initialSlide: 2
                }
            },
            {
                breakpoint: 700,
                settings: {
                    height: '100%'
                    // dots: false
                    // slidesToShow: 1,
                    // slidesToScroll: 1
                }
            }
        ]
    };

    return ( 
    <>
        <div className = 'divder homeslider' >

            <div className = 'home' >
                <img alt = "img" src = { home_slider } > </img> 
            </div>
            <div className = 'homesli' >
                <Slider { ...setting3 } >
                <div className = 'home-overlay' >
                    <div className = 'divder' >
                    <h1 className = 'heading' > Capture the essence of your victorious moments through the lens. </h1> 
                    <p className = 'text-content' > Complement your customization package with a complimentary photoshoot session to capture your unique style </p>
                    </div> { /* <button className='btnsli'>Customize Now</button> */ }
                </div> 
            <div className = 'home-overlay' >
                <div className = 'divder' >
                    <h1 className = 'heading' > Capture the essence of your victorious moments through the lens. </h1> 
                    <p className = 'text-content' > Complement your customization package with a complimentary photoshoot session to capture your unique style </p>
                </div> { /* <button className='btnsli'>Customize Now</button> */ }
            </div> 
            <div className = 'home-overlay' >
                <div className = 'divder' >
                    <h1 className = 'heading' > Capture the essence of your victorious moments through the lens. </h1> 
                    <p className = 'text-content' > Complement your customization package with a complimentary photoshoot session to capture your unique style </p>
                </div> { /* <button className='btnsli'>Customize Now</button> */ }
            </div> 
            <div className = 'home-overlay' >
                <div className = 'divder' >
                    <h1 className = 'heading' > Capture the essence of your victorious moments through the lens. </h1> 
                    <p className = 'text-content' > Complement your customization package with a complimentary photoshoot session to capture your unique style </p>
                </div> { /* <button className='btnsli'>Customize Now</button> */ }
            </div>
            </Slider> 
            <button className = 'btnsli' > Customize Now </button>
        </div>
    </div>
        <div className = 'divder widgth60' >
            <h1 className = 'heading' > Our Clubs </h1> 
            <p className = 'text-content' > Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ut id. </p> 
        </div> 
        <div className = 'clubs-container divder' >
            <div className = 'clubs-img c1' >
                <img alt = "img" src = { club1 } > </img> 
            </div> 
            <div className = 'clubs-img c2' >
                <img alt = "img" src = { club2 } > </img> 
            </div> 
            <div className = 'clubs-img c3' >
                <img alt = "img" src = { club3 } > </img> 
            </div> 
            <div className = 'clubs-img c4' >
                <img alt = "img" src = { club4 } > </img> 
            </div>
        </div>
        <div className = 'divder res' > 
            {/* <div></div> */} 
            <h1 className = 'heading' > Why Choose Jersey Kulture </h1> 
            <p className = 'text-content' > Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse id volutpat lectus.Integer cursus mollis semper.Sed lobortis tellus fermentum. </p> 
            <div className = 'img-con' >
                <div>
                    <div className = 'imgcontainer' >
                        <img alt = "img" src = { res1 } > </img> 
                    </div> 
                    <h4 > Lorem ipsum </h4> 
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse id volutpat lectus.Integer cursus mollis semper.Sed lobortis tellus fermentum. </p> 
                </div> 
                <div >
                    <div className = 'imgcontainer' >
                        <img alt = "img" src = { res2 } > </img> 
                    </div> 
                    <h4 > Lorem ipsum </h4> 
                    <p > Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse id volutpat lectus.Integer cursus mollis semper.Sed lobortis tellus fermentum. </p> 
                </div> 
                <div >
                    <div className = 'imgcontainer' >
                        <img alt = "img" src = { res3 } > </img> 
                    </div> 
                    <h4 > Lorem ipsum </h4> 
                    <p > Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse id volutpat lectus.Integer cursus mollis semper.Sed lobortis tellus fermentum. </p> 
                </div>
            </div> 
        </div>
        <div className = 'divder res2' >
            <div className = 'home' >
                <img alt = "img" src = { home } > </img> 
            </div> 
            <div className = 'home-overlay' >
                <div className = 'divder' >
                    <h1 className = 'heading' > Want to Customize your Jersey ? </h1> 
                    <p className = 'text-content' > Lorem ipsum dolor sit amet, consectetur adipiscing elit.Quisque vitae aliquet justo.In sed placerat quam, tincidunt pulvinar ipsum.Nunc maximus hendrerit nisi interdum malesuada.Suspendisse pulvinar maximus viverra.Ut. </p> 
                    <button > Customize </button> 
                </div> 
                <div className = 'overlayimg' >
                    <img alt = "img" src = { home2 } > </img> 
                </div> 
            </div> 
            <div className = 'home-overlay' >
                <div className = 'overlayimg' >
                    <img alt = "img" src = { home3 } > </img> 
                </div> 
                <div className = 'divder' >
                <h1 className = 'heading' > Have you seen our Templates ? </h1> 
                <p className = 'text-content' > Lorem ipsum dolor sit amet, consectetur adipiscing elit.Quisque vitae aliquet justo.In sed placerat quam, tincidunt pulvinar ipsum.Nunc maximus hendrerit nisi interdum malesuada.Suspendisse pulvinar maximus viverra.Ut. </p> 
                <button style = {{ float: 'left' }} > Explore </button> 
            </div>
        </div>
    </div>
    <div className = 'explore' >
        <div className = 'divder widgth60' >
            <h1 className = 'heading' > Explore our selection of
            pre - designed templates </h1> 
            <p className = 'text-content' > Lorem ipsum dolor sit amet, consectetur adipiscing elit.Proin ut volutpat arcu.Sed non lobortis nibh.Ut tinci dunt nisi sem, et elementum velit posuere eget.Phasellus tempor iaculis nibh at semper.Fusce non nisl feugiat,
            venenatis ligula et, pulvinar risus. </p> 
        </div> 
        <div className = 'product-slider' >
            <Slider { ...settings } >
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </Slider>
        </div> 
        <div className = 'exbtn' >
            <button className = 'custm' > Explore </button>
        </div> 
    </div>
    <div className = 'divder res posrel' > 
        {/* <div></div> */} 
        <h1 className = 'heading' > A satisfied customer is the best business strategy of all </h1> { /* <p className='text-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id volutpat lectus. Integer cursus mollis semper. Sed lobortis tellus fermentum.</p> */ } 
            <div className = 'userreview' >
                <Slider { ...setting2} >
                <div className = 'username' >
                    <p > “Lorem ipsum dolor sit amet, consectetur adipiscing elit.Proin ut volutpat arcu.Sed non lobortis nibh.Ut tincidunt nisi sem, et elementum velit posuere eget.Phasellus tempor iaculis nibh at semper.” </p> 
                    <div>
                        <p > Lorenz </p> 
                        <p > Gold Coast, QLD </p> 
                    </div>
                </div> 
                <div className = 'username' >
                <p > “Lorem ipsum dolor sit amet, consectetur adipiscing elit.Proin ut volutpat arcu.Sed non lobortis nibh.Ut tincidunt nisi sem, et elementum velit posuere eget.Phasellus tempor iaculis nibh at semper.” </p> 
                <div >
                    <p > Lorenz </p> 
                    <p > Gold Coast, QLD </p> 
                </div>
            </div> 
            <div className = 'username' >
                <p > “Lorem ipsum dolor sit amet, consectetur adipiscing elit.Proin ut volutpat arcu.Sed non lobortis nibh.Ut tincidunt nisi sem, et elementum velit posuere eget.Phasellus tempor iaculis nibh at semper.” </p> 
                <div >
                    <p > Lorenz </p> 
                    <p > Gold Coast, QLD </p> 
                </div>
            </div> 
            <div className = 'username' >
                <p > “Lorem ipsum dolor sit amet, consectetur adipiscing elit.Proin ut volutpat arcu.Sed non lobortis nibh.Ut tincidunt nisi sem, et elementum velit posuere eget.Phasellus tempor iaculis nibh at semper.” </p> 
                <div >
                    <p > Lorenz </p> 
                    <p > Gold Coast, QLD </p> 
                </div>
            </div>
                </Slider> 
            </div>
        </div>
    </>
    )
}

export default Home