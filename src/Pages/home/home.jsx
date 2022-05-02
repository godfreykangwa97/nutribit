import React, {Component} from 'react';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import Search from "../../containers/search/search";

import Today from "../../containers/today/today";
import Ingredients from "../../containers/ingredients/ingredients";
import Browse from "../../containers/browse/browse";
import Hire from "../../containers/hire/hire";

class  Home extends Component{
    render() {
        return (
            <div className="home">
                <Search/>
                <Today/>
                <Browse/>
                <Ingredients/>
                <Hire/>
            </div>
        );
    }
}
export default Home;
