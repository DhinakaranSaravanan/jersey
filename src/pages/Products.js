import React, { useState } from 'react'
import Product from '../components/product/Product'
import '../styles/Products.css'
import ReactPaginate from 'react-paginate';
import productsli from '../assets/productsli.png'

function Products() {
    const [first, setfirst] = useState(100)

    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    // Simulate fetching items from another resources.
    // (This could be items from props; or items loaded in a local state
    // from an API endpoint with useEffect and useState)
    const endOffset = itemOffset + 8;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = [...Array(first)].slice(itemOffset, endOffset);
    const pageCount = Math.ceil([...Array(first)].length / 8);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * 8) % [...Array(first)].length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
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
        div className = 'productabs' >
        <
        select >
        <
        option selected disabled > Select Category < /option> <
        option > cat 1 < /option> <
        /select> <
        input placeholder = 'Search Product' > < /input> <
        /div> <
        /div> <
        div className = 'divder widgth60' >
        <
        h1 className = 'heading' > How our Ready - made Collections work < /h1> <
        p className = 'text-content' > Once you 've selected your preferred template, add it to your cart with the desired quantity. Take a look at our sizing chart. During checkout, personalize your order by providing the team name, player names & numbers, and required sizes</p> <
        /div> <
        div className = 'products-container' >
        <
        Items currentItems = {
            currentItems
        }
        />

        <
        /div>

        <
        div >
        <
        ReactPaginate breakLabel = "..."
        nextLabel = ">"
        onPageChange = {
            handlePageClick
        }
        pageRangeDisplayed = {
            0
        }
        marginPagesDisplayed = {
            2
        }
        pageCount = {
            pageCount
        }
        previousLabel = "<"
        renderOnZeroPageCount = {
            null
        }
        /> <
        /div>

        <
        / >
    )
}

function Items({
    currentItems
}) {
    return ( <
        > {
            currentItems.map((d, i) => {

                return <React.Fragment key = {
                    i
                } > < Product / > < /React.Fragment>

            })

        } <
        />
    );
}

export default Products