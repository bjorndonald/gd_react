import React, { Component } from 'react';
import { Slider } from "./Slider";
import { Arrows } from "./Arrows";
import $ from 'jquery'

export class Header extends Component {
    constructor(props){
        super(props);
        this.state ={
            slide: 1
        }
        this.next = this.next.bind(this);
    }

    next(){
        this.setState({
            slide: this.state.slide + 1
        });
        //$(`#ring${this.state.slide}`).addClass('active');
    }

    componentWillUpdate(){
        $(`#tick${this.state.slide}`).removeClass('active');
    }

    componentDidUpdate(){
        $(`#tick${this.state.slide}`).addClass('active');
        $('.ring').animate({
            left: '+=26'
        });
    }

    render() {
        return (
            <header>
                <div className="container">
                    {/* <h1 className="section-title">Popular</h1> */}
                    <Arrows next = {this.next}/>
                    <Slider slide={this.state.slide} />
                    <div className="bottom">
                        <div className="ticks">
                            <div className="tick active" id="tick1"></div>
                            <div className="tick" id="tick2"></div>
                            <div className="tick" id="tick3"></div>
                            <div className="tick" id="tick4"></div>
                            <div className="tick" id="tick5"></div>
                            <div className="ring"></div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header
