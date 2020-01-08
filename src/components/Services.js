// Quality
// Friendly privateEncrypt
// Delivery
import React, { Component } from 'react';
import quality from './../img/quality.png';
import piggy_bank from './../img/piggy_bank.png';
import delivery from './../img/delivery.jpg';


export class Services extends Component {
    render() {
        return (
            <div className="services">
                <div className="container">
                    <div className="service">
                        <img src={quality}/>
                        <h2>Quality</h2>
                        <p>Lorem ipsum dolor sit amet,  
                           consectetur adipisicing elit. 
                           Beatae, eligendi.
                        </p>
                    </div>
                    <div className="service">
                        <img src={piggy_bank}/>
                        <h2>Friendly Prices</h2>
                        <p>Lorem ipsum dolor sit amet,  
                           consectetur adipisicing elit. 
                           Beatae, eligendi.
                        </p>
                    </div>
                    <div className="service">
                        <img src={delivery}/>
                        <h2>Quick Delivery</h2>
                        <p>Lorem ipsum dolor sit amet,  
                           consectetur adipisicing elit. 
                           Beatae, eligendi.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Services
