import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Hireme from '../../Shared/serviceAds.json';
import BackButton from "../../Components/backbutton/backButton";
class  ServiceAd extends Component{
    render() {
        return (
            <div className="service-ad top-down-4">
               <div className="wrapper">
                   <BackButton/>
                   <div className="opening">
                       <h1>Hire the best</h1>
                       <small>sponsored</small>
                   </div>

                  <div className="ad margin-top">
                      {Hireme.map((item) => (
                          <div className="sponsored grid-20-80" key={item.id}>
                              <div className="cover">
                                  <img src={item.cover} alt={item.name}/>
                              </div>
                              <div className="body text-left p-10">
                                  <h1>{item.name}</h1>
                                  <h4>{item.services}</h4>
                                  <span className="flex-inline color-yellow">
                                   <i className="fas fa-star"/>
                                   <i className="fas fa-star"/>
                                   <i className="fas fa-star"/>
                                   <i className="fas fa-star"/>
                                   <i className="fas fa-star"/>
                                </span>
                                  <div className="margin-1">
                                      <p>{item.info}</p>
                                  </div>
                                  <div className="option margin-1">
                                      <Link to={item.link} className="btn plain-btn color-main">
                                          <span>Hire me</span>
                                          <i className="fas fa-arrow-right margin-left-20"/>
                                      </Link>
                                  </div>
                              </div>
                          </div>
                      ))}
                  </div>
               </div>
            </div>
        );
    }
}
export default ServiceAd;
