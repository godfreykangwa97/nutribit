import React from 'react';
import OwlCarousel from "react-owl-carousel";
import Service from "../../Assets/services.json";
import BackButton from "../../Components/backbutton/backButton";
import Search from "../../Components/search/search";


const HireSlide ={
    mergeFit: true,
    loop: false,
    margin: 10,
    nav:false,
    autoplay: false,
    autoplaySpeed: 20,
    responsive:{
        0:{
            items:2,
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
};
const Hire = () => {
    return (
      <div className="hire top-down-4 bg-light">
          <div className="wrapper">
              <div className="opening text-left">
                  <BackButton/>
              </div>
              <div className="hire-class">
                  <div className="aside text-center">
                      <div className="cover-avatar">
                          <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
                      </div>
                      <h1>NAME</h1>
                      <h4 className={`color-main`}>events & catering</h4>
                      <div className="rating margin-1">
                          <span className={`flex-inline`}>
                              <i className={`fas fa-star`} />
                              <i className={`fas fa-star`} />
                              <i className={`fas fa-star`} />
                              <i className={`fas fa-star`} />
                              <i className={`fas fa-star`} />
                          </span>
                          <h1>45.6M</h1>
                      </div>
                      <div className={`margin-1 p-20`}>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                      </div>
                  </div>
                  <div className="information margin-top p-10">
                      <div className="services-offered">
                          <h2>Our services</h2>
                          <ul className={`grid-3 margin-1 color-main`}>
                              <li>Decoration</li>
                              <li>Event planing</li>
                              <li>Serving</li>
                              <li>Baking</li>
                              <li>tents & hairs</li>
                          </ul>
                      </div>
                      <OwlCarousel className="catalogs margin-top" {...HireSlide}>
                          {Service.map((item) => (
                              <div className="item" key={item.id}>
                                  <div className="cover">
                                      <img src={item.profile} alt={item.provider}/>
                                  </div>

                              </div>
                          ))}

                      </OwlCarousel>
                      <div className="grid-2 margin-top">
                          <div className="left">
                              <div className="contacts margin-top">
                                  <h2>Contact</h2>
                                  <ul className={`flex flex-column gap-2rem margin-1`}>
                                      <li><i className={`fas fa-user  color-main`}/><span className={`margin-left-20`}>marketing director</span></li>
                                      <li><i className={`fas fa-phone color-main`}/><span className={`margin-left-20`}>number</span></li>
                                      <li><i className={`fas fa-envelope color-main`}/><span className={`margin-left-20`}>email</span></li>
                                      <li><i className={`fas fa-map-marker color-main`}/><span className={`margin-left-20`}>address</span></li>
                                  </ul>
                              </div>
                              <div className="social-media margin-top">
                                  <h4>Follow & link</h4>
                                  <ul className={`flex-inline gap-2rem margin-1`}>
                                      <li><a href=""><i className={`fab fa-facebook`}/></a></li>
                                      <li><a href=""><i className={`fab fa-twitter`}/></a></li>
                                      <li><a href=""><i className={`fab fa-instagram`}/></a></li>
                                  </ul>
                              </div>
                          </div>
                          <div className="map">
                              <iframe
                                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15381.817343729164!2d28.2790415!3d-15.4599749!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe820dec3737a1982!2sEmit%20arts%20%26%20creatives!5e0!3m2!1sen!2szm!4v1648758853710!5m2!1sen!2szm"
                                  style={{ border: "0" }}
                                  allowFullScreen=""
                                  loading="lazy"
                                  referrerPolicy="no-referrer-when-downgrade"/>
                          </div>
                      </div>

                  </div>
              </div>
          </div>
          <Search/>
      </div>
    );
};
export default Hire;