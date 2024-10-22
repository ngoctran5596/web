import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const MyContext = createContext();
function App() {
  const [countryList, setCountryList] = useState([]);
  const [selectedCountryApp, setSelectedCountryApp] = useState("");
  const values = {
    countryList,
    selectedCountryApp,
    setSelectedCountryApp,
  };

  useEffect(() => {
    getCountryList("https://countriesnow.space/api/v0.1/countries");
  }, []);

  const getCountryList = async (url) => {
    const response = await axios.get(url);
    setCountryList(response.data?.data);
  };

  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        <Header />
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
        </Routes>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
