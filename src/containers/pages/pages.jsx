import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Home from "../Pages/home/home";
import Recipes from "../Pages/recipes/recipes";
import RecipeRead from "../Pages/recipes/read";


function Pages() {

    return (
        <div className="nutribit">
            <Routes>
                <Route index path="/" element={<Home/>}/>
                <Route exact={true} path="/recipe" element={<Recipes/>}/>
                <Route exact={true} path="/recipe/id" element={<RecipeRead/>}/>
            </Routes>
        </div>
    );
}

export default Pages;
