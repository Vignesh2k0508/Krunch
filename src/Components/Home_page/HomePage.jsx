import React from "react";
import Navbar from "./Navbar";
import HomePageContent from "./HomePageContent";

const HomePage=()=>{
    return(
        
            <div className="homePage">
                <Navbar/>
                <HomePageContent/>
            </div>
        
    )
}

export default HomePage;