import React from 'react';
import { useNavigate } from 'react-router-dom';
const BackButton = () => {
    const navigate = useNavigate();
    return (
        <button className="btn icon-btn" onClick={() => navigate(-1)}>
            <i className="fas fa-arrow-left"/>
            <span className="margin-left-20">Back</span>
        </button>
    )
}

export default BackButton;