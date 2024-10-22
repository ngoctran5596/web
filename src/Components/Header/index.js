import React, { useContext } from "react";
import Logo from "../../asset/images/logo.png";
import { Link } from "react-router-dom";
import CountryDropdown from "../CountryDropdown";
import { Button } from "@mui/material";
import { FiUser } from "react-icons/fi";
import { IoBagOutline } from "react-icons/io5";
import SearchBox from "./SearchBox";
import Navigation from "./Navigation";
function Header() {
  return (
    <div className="headerWrapper">
      <div className="top-strip bg-blue">
        <div className="container">
          <p className="mb-0 mt-0 text-center">
            Due to the COVID 19 epidemic, orders may be processed with a slight
            delay
          </p>
        </div>
      </div>
      <header className="header">
        <div className="container">
          <div className="row">
            <div className="logoWrapper d-flex align-items-center col-sm-2">
              <Link to={"/"}>
                <img src={Logo} alt="Logo" />
              </Link>
            </div>
            <div className="col-sm-10 d-flex align-items-center part2">
              {<CountryDropdown />}
              {/* Header Search */}
              <SearchBox />
              {/* Header Search */}
              <div className="part3 d-flex align-items-center ml-auto">
                <Button className="mr-2 circle">
                  <FiUser />
                </Button>
                <div className="ml-auto cardTab d-flex align-items-center">
                  <span className="price">$20</span>
                  <div className="position-relative ml-2">
                    <Button className="circle ml-2">
                      <IoBagOutline />
                    </Button>
                    <span className="count d-flex align-items-center justify-content-center">
                      3
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Navigation />
    </div>
  );
}

export default Header;
