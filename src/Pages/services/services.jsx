import React from 'react';
import ServiceAd from "../../containers/service-ad/service-ad";
import Pagination from "../../containers/pagination/pagination";
import services from '../../Assets/services.json';
import {Link} from "react-router-dom";
import Search from "../../Components/search/search";


let PageSize = 15;


const Services = () => {
    const [currentPage, setCurrentPage] = React.useState(1);
    const currentData = React.useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return services.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);
    return (
        <div className="services">
            <ServiceAd/>
            <div className="wrapper">
                <div className="providers  top-down-4">
                    <div className="grid-5">
                        {currentData.map((item) => (
                            <Link to={item.link} key={item.id}>
                                <div className="provider">
                                    <div className="cover">
                                        <img src={item.profile} alt={item.provider}/>
                                    </div>
                                    <div className="body p-10">
                                        <h3>{item.provider}</h3>
                                        <h5>{item.class}</h5>
                                        <p>{item.services}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <Pagination
                        className="pagination margin-1"
                        currentPage={currentPage}
                        totalCount={services.length}
                        pageSize={PageSize}
                        onPageChange={page => setCurrentPage(page)}
                    />
                </div>
            </div>
            <Search/>
        </div>
    );
}

export default Services;
