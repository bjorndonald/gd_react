import React, { Component } from 'react';
import shoes from './../img/shoes.jpg';
import lady from './../img/lady.jpg';
import dots from './../img/DOTS.png';
import pebble from './../img/pebble.png';

export class Banner extends Component {
    render() {
        return (
            <div className="banner">
                <div className="container">
                    <div className="left">
                        <img src={shoes} />
                        <h1>NICE!</h1>
                    </div>
                    <img src={pebble} className="pebble" />
                    <div className="lady">
                        <img src={lady}/>
                    </div>
                    <div className="right">
                        <h1>Simple.<br /> Straight To The Point.</h1>
                        <p>Get unique and beautiful clothing
                                Shopping made simple and straight 
                                to the point
                        </p>
                    </div>
                    <img src={dots} className="dots" />
                    

                </div>
            </div>
        )
    }
}

export default Banner
