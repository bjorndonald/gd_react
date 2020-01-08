import React, { Component } from 'react';
import shoes from './../img/shoes.jpg';
import lady from './../img/lady.jpg';
import dots from './../img/DOTS.png';
import pebble from './../img/pebble.png';
import Banner from './Banner';
import Categories from './Categories'

export class Content extends Component {
    render() {
        return (
            <div className="content">
                <Categories />
            </div>
        )
    }
}

export default Content
