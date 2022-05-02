import React, {Component} from 'react';

class Search extends Component {
    render() {
        return (
            <div className="search-field">
                <div className="scaled">
                    <div className="wrapper">
                        <form action="" className="search-wrapper">
                            <input type="search" placeholder="find"/>
                            <button type="submit">find</button>
                        </form>
                        <div className="results"></div>
                    </div>
                </div>
                <button className="btn search-button"><i className="fas fa-search"/></button>
            </div>
        )
    }
}
export default Search;