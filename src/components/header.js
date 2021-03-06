import React from 'react';

import TopNav from './top-nav';
import Infomodal from './info-modal';

import './header.css';

export default function Header(props) {
    console.log(props.toggleInfoModal);
    return (
        <header>
            <div>
            <TopNav onRestartGame={()=> props.onRestartGame() } toggleInfoModal={props.toggleInfoModal}/>
            { props.infoModal && <Infomodal toggle={props.toggleInfoModal} /> }
            <h1>HOT or COLD</h1>
            </div>
        </header>
    );
};
