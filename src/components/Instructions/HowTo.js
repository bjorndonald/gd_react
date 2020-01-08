import React, { Component } from 'react';
import Products from './Products';
import Payment from './Payment';
import Underline from './../_util/Underline';

export class HowTo extends Component {
    render() {
        return (
            <div className="howto">
                <div className="container">
                    <h1>EFFICIENT SHOPPING<br />
                        HERE' S HOW IT ALL WORKS.</h1>
                    <Underline />
                    <Products />
                    <Payment />
                </div>
            </div>
        )
    }
}

export default HowTo
