import React, {
    useState,
    useEffect
} from 'react'
import productsli from '../assets/custom.png'
import '../styles/Customization.css'
import InputWithLable from '../components/inputWithLable/InputWithLable'



function Customization() {
    const handleChange = (e) => {
        const target = e.target;
        // do whatever you want with the state :)
        this.setState({
            [target.name]: target.value
        });
    };

    return ( <
        >
        <
        div style = {
            {
                position: 'relative'
            }
        } >
        <
        div className = 'productslider' >
        <
        img src = {
            productsli
        }
        alt = 'productsli' > < /img> <
        /div> <
        /div> <
        div className = 'custom-user-details' >
        <
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
            "Country "
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
        /div>


        <
        div >




        <
        /div>



        <
        div className = 'custom-textarea' >
        <
        div className = 'divder' >
        <
        h1 className = 'heading'
        style = {
            {
                textAlign: "left"
            }
        } > Tells us how your Jersey want be < /h1> { /* <p className='text-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id.</p> */ } <
        /div> <
        textarea rows = {
            15
        }
        value = {
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum scelerisque."
        } > < /textarea> <
        /div> <
        div className = 'btn-cust'
        style = {
            {
                display: "flex",
                justifyContent: "center"
            }
        } >
        <
        button > Send Request < /button> <
        /div> <
        />
    )
}

export default Customization