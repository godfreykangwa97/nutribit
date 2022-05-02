import React, {useState} from 'react';

const Search = () =>  {
    const [isActive, setActive] = useState("false");
    const [isChanged, setChanged] = useState("false");

    const ToggleClass = () => {
        setActive(!isActive);
    };
    const Change = () => {
         setChanged(!isChanged);
    };
    return (
        <div className="search-field">
            <div className={isActive ? "scaled-0" : "scaled-1"}>
                <div className="wrapper">
                    <form action="" className="search-wrapper">
                        <input type="search" placeholder="find"/>
                        <button type="submit">find</button>
                    </form>
                    <div className="results"></div>
                </div>
            </div>
            <button className="btn search-button" onClick={ToggleClass} ><i className="fas fa-search" /></button>
        </div>
    );
};
export default Search;