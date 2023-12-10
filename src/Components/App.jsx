import React from "react";
import HomePage from "./Home_page/HomePage";
import "../global.css"
import AboutUs from "./About_us/AboutUs.jsx";
import Portfolio from "./Portfolio/Portfolio";

const App=()=>{
    return(
        <>
            <HomePage/>
            <AboutUs/>
            <Portfolio/>
        </>
    )
}

export default App;