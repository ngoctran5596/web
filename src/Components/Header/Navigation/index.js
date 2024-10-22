import { Button } from '@mui/material'
import React from 'react'
import { IoIosMenu } from 'react-icons/io'
import { FaAngleDown } from 'react-icons/fa6'
import { CiHome } from 'react-icons/ci'
import { Link } from 'react-router-dom'

function Navigation() {
    return (
        <nav className="container">
            <div className="row">
                <div className="col-sm-3 navPart1">
                    <Button className="align-items-center allCatTab">
                        <span className='mr-2'><IoIosMenu /></span>
                        <span className="text"> All product</span>
                        <span className='ml-2'><FaAngleDown /></span>
                    </Button>
                </div>
                <div className="col-sm-9 navPart2 d-flex align-items-center">
                    <ul className='list list-inline ml-auto'>
                        <li className='list-inline-item'><Link to={"/"}><CiHome />Home</Link></li>
                        <li className='list-inline-item'><Link to={"/"}>Shop</Link></li>
                        <li className='list-inline-item'><Link to={"/"}>Meats&Seafood</Link></li>
                        <li className='list-inline-item'><Link to={"/"}>Bakery</Link></li>
                        <li className='list-inline-item'><Link to={"/"}>Beverages</Link></li>
                        <li className='list-inline-item'><Link to={"/"}>Blog</Link></li>
                        <li className='list-inline-item'><Link to={"/"}>Contact</Link></li>
                    </ul>
                </div>

            </div>

        </nav>
    )
}

export default Navigation