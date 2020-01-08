import React, { Component } from 'react';
import gdlogopic from './../img/gdlogopic.png';
import twitter from './../img/twitter.png';
import facebook from './../img/facebook.png';
import linkedin from './../img/linkedin.png';
export class NavMain extends Component {
    render() {
        return (
            <nav>
                <div className="container">
                    <div className="logo">
                        <img src={gdlogopic} />
                    </div>
                    <ul>
                        <li></li>
                        <li><img src={twitter}/></li>
                        <li><img src={facebook}/></li>
                        <li><img src={linkedin}/></li>
                    </ul>
                    <div className="bars">
                        <div className="bar" id="bar_1"></div>
                        <div className="bar" id="bar_2"></div>
                        <div className="bar" id="bar_3"></div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default NavMain
