import React, {Component} from 'react';
import {Link} from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import D from "../../Assets/img/iStock1303042978jpg_608820ea97059.jpg";
import E from "../../Assets/img/6078c68c2f49b.jpeg";

const BrowseSlide = {
    item: 4,
    mergeFit: true,
    loop: false,
    margin:10,
    nav:false,
    length: 4,
    responsive:{
        0:{
            items:2,
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
};

class Browse extends Component {
    render() {
        return (
            <div className="browse top-down-4">
                <div className="wrapper">
                    <div className="opening text-left">
                        <h1>Browse Our catalogs</h1>
                        <p>what would you like to prepare</p>
                    </div>

                    <OwlCarousel className="catalogs margin-top" {...BrowseSlide}>
                        <div className='item'>
                            <div className="cover">
                                <img src={D} alt="Braai"/>
                            </div>
                            <div className="body">
                                <h2>Braai</h2>
                                <p>100 + recipes</p>
                            </div>
                        </div>

                        <div className='item'>
                            <div className="cover">
                                <img src={E} alt="Braai"/>
                            </div>
                            <div className="body">
                                <h2>Braai</h2>
                                <p>100 + recipes</p>
                            </div>
                        </div>

                    </OwlCarousel>
                </div>
            </div>
        );
    }
}

export default Browse;