import React, { Component } from 'react';
import top_1 from './../img/top_1.jpg';
import top_2 from './../img/top_2.jpg';
import top_3 from './../img/top_3.jpg';
import acc_1 from './../img/acc_1.jpg';
import acc_2 from './../img/acc_2.jpg';
import acc_3 from './../img/acc_3.jpg';

export class Categories extends Component {
    render() {
        return (
            <div className="categories">
                <div className="container">
                    {/* <h1 className="section-title">Categories</h1> */}
                    <div className="category tops">
                        <div className="left">
                            <img src={top_1} />
                            <img src={top_2} />
                            <img src={top_3} />
                        </div>
                        <div className="right">
                            <h1>TOPS AND TEES</h1>
                            <p>We got different apparels like t-shirts, tops with different
                                designs all done to suit both male and female wearers.</p>
                        </div>
                    </div>
                    <div className="category acc">
                        <div className="left">
                            <img src={acc_1} />
                            <img src={acc_2} />
                            <img src={acc_3} />
                        </div>
                        <div className="right">
                            <h1>ACCESSORIES</h1>
                            <p>We got different accessories like caps, watches of exquisite
                                quality to spruce up your look and complete your outfits
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Categories
