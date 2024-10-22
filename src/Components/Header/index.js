import React from "react";
import Logo from "../../asset/images/logo.png";
import { Link } from "react-router-dom";
import CountryDropdown from "../CountryDropdown";
import { Button } from "@mui/material";
import { IoIosSearch } from "react-icons/io";
import { FiUser } from "react-icons/fi";
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
              <CountryDropdown />
              {/* Header Search */}
              <div className="headerSearch ml-3 mr-3">
                <input type="text" placeholder="Search for product ..." />
                <Button>
                  <IoIosSearch />
                </Button>
              </div>
              {/* Header Search */}
              <div className="part3 d-flex align-items-center ml-auto">
                <Button className="circle">
                  <FiUser />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
