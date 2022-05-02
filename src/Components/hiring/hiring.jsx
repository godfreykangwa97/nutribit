import React, {useMemo, useState} from 'react';
import {Link} from "react-router-dom";

import HireMe from "../Shared/serviceAds.json";

let DataSize = 1
const Sponsored = () => {

    const [limitedPage] = useState(1);
    const SlicedData = useMemo(() => {
        const toShow = (limitedPage - 1) * DataSize;
        const fromTotal = toShow + DataSize;
        return HireMe.slice(toShow, fromTotal);
    }, [limitedPage]);
    return (
        <div className="hiring margin-1">
            <div className="heading text-left">
                <h5 className="color-main">Recent recipes</h5>
            </div>
            {SlicedData.map((item) => (
                <Link to="/service/id" className="hire-post flex flex-column margin-1" key={item.id}>
                    <div className="cover">
                        <img src={item.cover} alt={item.name}/>
                    </div>
                    <div className="body">
                        <h1>{item.name}</h1>
                        <h5>{item.services}</h5>
                        <span className="flex-inline color-yellow">
                                   <i className="fas fa-star"/>
                                   <i className="fas fa-star"/>
                                   <i className="fas fa-star"/>
                                   <i className="fas fa-star"/>
                                   <i className="fas fa-star"/>
                        </span>
                    </div>
                </Link>
            ))}
        </div>
    );
};
export default Sponsored;