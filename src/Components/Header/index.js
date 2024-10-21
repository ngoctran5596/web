import React from 'react'
import Logo from "../../asset/images/logo.png"
import { Link } from 'react-router-dom'
import CountryDropdown from '../CountryDropdown';
import { Button } from '@mui/material';
import { IoSearch } from "react-icons/io5";

function Header() {
    return (
        <div className='headerWrapper'>
            <div className='top-strip bg-blue'>
                <div className='container'>
                    <p className='mb-0 mt-0 text-center'>
                        Due to the COVID 19 epidemic, orders may be processed with a slight delay
                    </p>
                </div>
            </div>
            <div className='header'>
                <div className='container'>
                    <div className='row'>
                        <div className='logoWrapper d-flex align-items-center col-sm-2'>
                            <Link to={'/'}>
                                <img src={Logo} alt='Logo' />
                            </Link>
                        </div>
                        <div className='col-sm-10 d-flex align-items-center part2'>
                            <CountryDropdown />
                            {/* Header Search */}
                            <div className='headerSearch'>
                                <input type='text' />
                                <Button>
                                    <IoSearch />
                                </Button>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Header