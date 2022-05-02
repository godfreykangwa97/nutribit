import React from "react";
import classnames from "classnames";

import {usePagination, DOTS} from "./usePagination";

const Pagination = props => {
    const {
        onPageChange,
        totalCount,
        siblingCount = 1,
        currentPage,
        pageSize,
        className
    } = props;

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    });

    // If there are less than 2 times in pagination range we shall not render the component
    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    let lastPage = paginationRange[paginationRange.length - 1];
    return (
        <div className={classnames('pagination flex-inline gap-2 margin-top', { [className]: className })}>
            {/* Left navigation arrow */}
            <button
                className={classnames('pagination-btn', {
                    disabled: currentPage === 1
                })}
                onClick={onPrevious}
            >
                <i className="fas fa-arrow-left" />
            </button>
            {paginationRange.map(pageNumber => {

                // If the pageItem is a DOT, render the DOTS unicode character
                if (pageNumber === DOTS) {
                    return <span className="pagination-item dots">&#8230;</span>;
                }

                if (pageNumber === currentPage){
                    return (
                        <button
                            className={classnames('active', {
                                selected: pageNumber === currentPage
                            })}
                            onClick={() => onPageChange(pageNumber)}
                        >
                            {pageNumber}
                        </button>
                    )
                }

                // Render our Page Pills
                return (
                    <button
                        className={classnames('pagination-btn', {
                            selected: pageNumber === currentPage
                        })}
                        onClick={() => onPageChange(pageNumber)}
                    >
                        {pageNumber}
                    </button>
                );
            })}
            {/*  Right Navigation arrow */}
            <button
                className={classnames('pagination-btn', {
                    disabled: currentPage === lastPage
                })}
                onClick={onNext}
            >
                <i className="fas fa-arrow-right" />
            </button>
        </div>
    );
};

export default Pagination;