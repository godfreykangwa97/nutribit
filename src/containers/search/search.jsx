import React from 'react';

const Search = () => {
    return (
        <div className="search top-down-4">
            <div className="wrapper flex flex-column justify-center align-center gap-2rem">
                <div className="opening text-center">
                    <h4 className="f-2 f-n f-w-5">Find a recipe</h4>
                    <p>search all our catalog, over 1000 recipes.</p>
                </div>
                <form action="" className={`home-search-wrapper flex space-between align-center`}>
                    <input type="text" placeholder="search now"/>
                    <button type="submit" className={`icon-btn`}><i className={`fas fa-search`}/></button>
                </form>
            </div>
        </div>
    );
};
export default Search;