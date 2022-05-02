import React from 'react';
import BackButton from "../../Components/backbutton/backButton";
import Search from "../../Components/search/search";
import SideBar from "../../Components/sidebar/sidebar";
import Read from "../../Components/read/read";

const RecipeRead = () => {

    return(
        <div className="recipes top-down-4">
            <div className="wrapper">
                <div className="opening">
                    <BackButton/>
                </div>
                <div className="read-grid top-down-4">
                    <Read/>
                    <SideBar/>
                </div>
            </div>
            <Search/>
        </div>
    );

};
export default RecipeRead;