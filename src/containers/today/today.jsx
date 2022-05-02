import React, {Component} from 'react';
import {Link} from "react-router-dom";
import A from "../../Assets/img/istockphoto-1320695906-612x612.jpg";
import B from "../../Assets/img/iStock-1251268582.jpg";
import C from "../../Assets/img/iStock-1194264404.jpg";

class Today extends Component {
    render() {
        return (
            <div className="today top-down-4">
                <div className="wrapper">
                    <div className="opening text-left">
                        <h3>Today's special</h3>
                    </div>
                    <div className="grid-3">
                        <Link to="">
                            <div className="rec">
                                <div className="cover">
                                    <img src={A} alt=""/>
                                </div>
                                <div className="body p-10">
                                    <div className="heading flex space-between align-center">
                                        <h2>Braii and bean</h2>
                                        <button className="icon-btn"><i className="fas fa-heart"/></button>
                                    </div>
                                    <small>prepare a delicious meal for your family</small>
                                </div>
                            </div>
                        </Link>

                        <div className="rec">
                            <div className="cover">
                                <img src={B} alt=""/>
                            </div>
                            <div className="body p-10">
                                <div className="heading flex space-between align-center">
                                    <h2>Braii and bean</h2>
                                    <button className="icon-btn"><i className="fas fa-heart"/></button>
                                </div>
                                <small>prepare a delicious meal for your family</small>
                            </div>
                        </div>
                        <div className="rec">
                            <div className="cover">
                                <img src={C} alt=""/>
                            </div>
                            <div className="body p-10">
                                <div className="heading flex space-between align-center">
                                    <h2>Braii and bean</h2>
                                    <button className="icon-btn"><i className="fas fa-heart"/></button>
                                </div>
                                <small>prepare a delicious meal for your family</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Today;