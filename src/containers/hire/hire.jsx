import React, {Component} from 'react';
import {Link} from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import Service from "../../Assets/services.json";

const HireSlide ={
    mergeFit: true,
    loop: true,
    margin:10,
    nav:false,
    length: 9,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
};

class Hire extends Component {
    render() {
        return (
            <div className="events top-down-4">
                <div className="wrapper">
                    <div className="opening text-left">
                        <div className="heading flex space-between align-center">
                            <h1 className="f-3 f-w-5 color-main">Hire</h1>
                            <Link to={`/services`}><i className={`fas fa-arrow-right color-main`}/></Link>
                        </div>
                        <p>Wedding, kitchen party, birthday, funeral and more</p>
                    </div>
                    <OwlCarousel className="catalogs margin-top" {...HireSlide}>
                        {Service.map((item) => (
                            <div className="item" key={item.id}>
                                <div className="cover">
                                    <Link to={item.link}>
                                        <img src={item.profile} alt={item.provider}/>
                                    </Link>
                                </div>
                                <div className="body">
                                    <h1>{item.provider}</h1>
                                    <p>{item.services}</p>
                                    <br/>
                                    <div className={`options`}>
                                        <Link to={item.link} className={`btn hire-btn`}>Hire</Link>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </OwlCarousel>
                </div>
            </div>
        );
    }
}

export default Hire;