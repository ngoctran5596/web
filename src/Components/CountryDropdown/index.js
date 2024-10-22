import { FaAngleDown } from "react-icons/fa";
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { IoIosSearch } from "react-icons/io";
import { MdClose } from "react-icons/md";
import Slide from "@mui/material/Slide";
import { MyContext } from "../../App";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function CountryDropdown(props) {
  const context = React.useContext(MyContext);
  const [isOpenModal, setOpenModal] = React.useState(false);
  const [selectedTab, setSelectedTab] = React.useState(null);
  const [countryList, setCountryList] = React.useState([]);
  const selectCountry = (index, country) => {
    setSelectedTab(index);
    setOpenModal(false);
    context.setSelectedCountryApp(country);
  };

  React.useEffect(() => {
    setCountryList(context.countryList);
  }, []);

  const filterList = (e) => {
    const keyWord = e.target.value.toLowerCase();
    let list = [];
    if (keyWord !== "") {
      let array = countryList?.filter((item) => {
        return item?.country?.toLowerCase().includes(keyWord);
      });
      if (array.length === 0) {
        array = context.countryList?.filter((item) => {
          return item?.country?.toLowerCase().includes(keyWord);
        });
      }
      list = array;
    } else {
      list = context.countryList;
    }
    setCountryList(list);
  };
  return (
    <>
      <Button
        className="countryDrop"
        onClick={() => {
          setOpenModal(true);
        }}
      >
        <div className="info d-flex  flex-column">
          <span className="label">Your location</span>
          <span className="name">
            {context.selectedCountryApp !== ""
              ? context.selectedCountryApp
              : "Select location"}
          </span>
        </div>
        <span className="ml-auto">
          <FaAngleDown />
        </span>
      </Button>
      <Dialog
        className="locationModal"
        onClose={() => setOpenModal(false)}
        keepMounted
        TransitionComponent={Transition}
        open={isOpenModal}
      >
        <h4 className="mb-0">Choose your Delivery Location</h4>
        <p>Enter your address and we will specify the offer for your area.</p>
        <Button
          className="close_"
          onClick={() => {
            setOpenModal(false);
          }}
        >
          <MdClose />
        </Button>
        <div className="headerSearch w-100">
          <input
            type="text"
            placeholder="Search for product ..."
            onChange={(e) => filterList(e)}
          />
          <Button>
            <IoIosSearch />
          </Button>
        </div>
        <ul className="countryList mt-3">
          {countryList.length !== 0 ? (
            countryList.map((i, index) => {
              return (
                <li key={index}>
                  <Button
                    onClick={() => {
                      selectCountry(index, i.country);
                    }}
                    className={`${selectedTab === index ? "active" : ""}`}
                  >
                    {i?.country}
                  </Button>
                </li>
              );
            })
          ) : (
            <div>
              <span>No data</span>
            </div>
          )}
        </ul>
      </Dialog>
    </>
  );
}

export default CountryDropdown;
