import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Home from "../../Pages/home/home";
import Recipes from "../../Pages/recipes/recipes";
import RecipeRead from "../../Pages/recipes/read";
import Services from "../../Pages/services/services";
import Hire from "../../Pages/hire/hire";
import About from "../../Pages/about/about";


function Pages() {

    return (
        <div className="nutribit">
            <Routes>
                <Route index path="/" element={<Home/>} />
                <Route exact={true} path="/recipe" element={<Recipes/>} />
                <Route exact={true} path="/recipe/id" element={<RecipeRead/>} />
                <Route exact={true} path="services" element={<Services/>} />
                <Route exact={true} path="/service/Id" element={<Hire/>} />
                <Route exact={true} path="/about" element={<About/>} />
            </Routes>
        </div>
    );
}

export default Pages;
