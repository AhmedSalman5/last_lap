import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Search.css';
import axios from 'axios';


function Search(props) {

    const [search, setSearch] = useState();

    useEffect(() => {
        if (search === '') {
            props.getProductsList()
        }
    }
        , [search])

    const getSearchData = () => {
        axios.get(`https://dummyjson.com/products/search?q=${search}`)
            .then((response) => {
                props.setProductsList(response.data.products)
                console.log(response.data.products)
            })
    }

    return (
        <>
            <div className="search-container">
                <input type='text' id="search" placeholder="Search..." className='input'
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button type="submit" onClick={() => { getSearchData() }}>Search</button>
            </div>
        </>
    )
}

export default Search;