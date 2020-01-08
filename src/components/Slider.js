import React, { Component } from 'react';
import Slide from './Slide'

export class Slider extends Component {
    render() {
        const data = [
            {
                id:1,
                title:"GOOD STUFF TEE",
                section:"Unisex T-shirts",
                size:"MEDIUM",
                color:"BLUE"
            },
            {
                id:2,
                title:"BASEBALL CAP",
                section:"Unisex Accessories",
                size:"MEDIUM",
                color:"GRAY"
            },
            {
                id:3,
                title:"Gray Sweater",
                section:"Unisex T-shirts",
                size:"MEDIUM",
                color:"GRAY"
            }
        ]
        return (
            <div className="slider">
                <Slide slide = {this.props.slide} data={data} />
            </div>
        )
    }
}

export default Slider
