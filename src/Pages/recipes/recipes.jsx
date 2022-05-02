import React, {useState, useMemo, Component} from 'react';
import { Link } from 'react-router-dom';
import pagination from '../../containers/pagination/pagination';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import Data from "../../Assets/Data.json";
import Search from "../../Components/search/search";
import BackButton from "../../Components/backbutton/backButton";

let PageSize = 10;

const Recipes = (props) => {
    const [currentPage, setCurrentPage] = useState(1);

    const currentData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return Data.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);
    return (
        <div className="recipes top-down-4">
            <div className="wrapper">
                <BackButton/>
                <div className="topping top-down-4">
                    <div className="opening text-left">
                        <h1 className="f-3 f-w-5">Topping recipes</h1>
                        <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, hic.</h5>
                    </div>
                </div>
                <div className="list">
                    <div className="grid-5 top-down-4 gap-2rem">
                        {currentData.map((item) => (
                            <Link to={item.link}  key={item.id}>
                                <div className="recipe">
                                    <div className="cover">
                                        <Link to={item.link}>
                                            <img src={item.cover} alt={item.title}/>
                                        </Link>
                                    </div>
                                    <div className="body">
                                        <h3 className="f-1 f-w-5">{item.title}</h3>
                                        <small>{item.body}</small>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <pagination
                        className="pagination"
                        currentPage={currentPage}
                        totalCount={Data.length}
                        pageSize={PageSize}
                        onPageChange={page => setCurrentPage(page)}
                    />
                </div>
            </div>
            <Search/>
        </div>
    );
}


export default Recipes;