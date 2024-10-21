import { Button } from '@mui/material'
import React from 'react'
import { FaAngleDown } from 'react-icons/fa'

function CountryDropdown() {
    return (
        <>
            <Button className='countryDrop'>
                <div className='info d-flex  flex-column'>
                    <span className='label'>Your location</span>
                    <span className='name'>Viet Nam</span>
                </div>
                <span className='ml-auto'>
                    <FaAngleDown />
                </span>
            </Button>
        </>
    )
}

export default CountryDropdown