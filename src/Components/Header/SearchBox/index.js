import { Button } from '@mui/material'
import React from 'react'
import { IoIosSearch } from 'react-icons/io'

function SearchBox() {
    return (
        <div className="headerSearch ml-3 mr-3">
            <input type="text" placeholder="Search for product ..." />
            <Button>
                <IoIosSearch />
            </Button>
        </div>
    )
}

export default SearchBox