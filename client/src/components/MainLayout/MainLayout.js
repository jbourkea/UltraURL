import React from 'react';
import './style.css';
// TODO: Delete after
import Header from '../Header/Header';


export default function MainLayout(props) {
    return (
        <div className="screen-section">
            <div className="content-section">
                {props.children}
            </div>
        </div>
    )
}
