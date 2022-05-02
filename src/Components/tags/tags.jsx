import React from 'react';
import tag from '../Assets/tags.json';
import {Link} from "react-router-dom";
const Tags = () => {
    return (
        <div className="tags grid-3-no-space gap-1rem margin-top">
            {tag.map((item) => (
                <Link to={item.url} key={item.id} className="btn bordered-btn">
                    {item.tag}
                </Link>
            ))}
        </div>
    );
};
export default Tags;