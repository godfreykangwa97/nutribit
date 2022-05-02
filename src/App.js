import React, {Component} from 'react';
import Header from "./Components/header/header";


import Footer from "./Components/footer/footer";
import Pages from "./containers/pages/pages";

class  App extends Component{
    render() {
        return (
            <div className="nutribit">
                <Header/>
                <div className="main">
                    <Pages/>
                </div>
                <Footer/>
            </div>
        );
    }


}

export default App;
