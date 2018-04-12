import React from 'react';

import TopNav from './top-nav';
// import Infomodal from './info-modal';

import './header.css';

export default function Header(props) {
    return (
        <header>
            <TopNav onRestartGame={()=> props.onRestartGame()}/>
            {/* <Infomodal />  */}
            <h1>HOT or COLD</h1>
        </header>
    );
};
