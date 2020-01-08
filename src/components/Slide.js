import React, { Component } from 'react';
import $ from 'jquery'
import { func } from 'prop-types';

export class Slide extends Component {
    constructor(props){
        super(props);
        this.state={
            img: this.props.slide
        }
        this.img = require(`./../img/img${this.props.slide}.jpg`);
        this.img1 = require(`./../img/img${this.props.slide+1}.jpg`);
    }
    componentWillUpdate(){
        $(`#img${this.props.slide}`).animate({
            top: "-=50",
            opacity: "0"
        },500);
        $(`#title${this.props.slide}`).animate({
            opacity: "0"
        },500);
        $(`#color${this.props.slide}`).animate({
            opacity: "0"
        },500);
        $(`#size${this.props.slide}`).animate({
            opacity: "0"
        },500);
        $(`#img${this.props.slide}`).removeClass('active');
        $(`#title${this.props.slide}`).removeClass('active');
        $(`#color${this.props.slide}`).removeClass('active');
        $(`#size${this.props.slide}`).removeClass('active');
    }

    componentDidUpdate(){
        var slide = this.props.slide;
        setTimeout(function() {
            //your code to be executed after 1 second
            $(`#img${slide}`).animate({
                top: "+=50",
                opacity: "1"
            },500);
            $(`#title${slide}`).animate({
                opacity: "1"
            },500);
            $(`#color${slide}`).animate({
                opacity: "1"
            },500);
            $(`#size${slide}`).animate({
                opacity: "1"
            },500);
            $(`#img${slide}`).addClass('active');
            $(`#title${slide}`).addClass('active');
            $(`#color${slide}`).addClass('active');
            $(`#size${slide}`).addClass('active');
        }, 500);
        
    }
    render() {
        //console.log(this.style);
        const data = this.props.data;
        return (
            <div className="slide">
                <div className="banner" style={this.style}>
                    {
                        data.map((value, index)=>{
                            console.log(index);
                            this.img = require(`./../img/img${index+1}.jpg`);
                            console.log(this.img);
                            if(index==0)
                                return <img src={this.img} className="active" id={`img${index+1}`} />
                            else
                                return <img src={this.img} id={`img${index+1}`} />
                        })
                    }
                </div>
                <div className="extra"></div>
                <div className="body">
                    <div className="info">
                        {
                            data.map((value, index)=>{
                                if(index==0)
                                    return (<ul className="active title" id={`title${index+1}`}>
                                        <h1>{value.title}</h1>
                                        <small>Unisex T-shirts</small>
                                    </ul>)
                                else
                                    return (<ul className="title" id={`title${index+1}`}>
                                        <h1>{value.title}</h1>
                                        <small>Unisex T-shirts</small>
                                    </ul>)
                            })  
                        }
                        {
                            data.map((value, index)=>{
                                if(index==0)
                                    return (<ul className="active size" id={`size${index+1}`}>
                                        <small>Size</small>
                                        <h1>{value.size}</h1>
                                    </ul>)
                                else
                                    return (<ul className="size" id={`size${index+1}`}>
                                        <small>Size</small>
                                        <h1>{value.size}</h1>
                                    </ul>)
                            })  
                        }

                        {
                            data.map((value, index)=>{
                                if(index==0)
                                    return (<ul className="active color" id={`color${index+1}`}>
                                        <small>Color</small>
                                        <h1>{value.color}</h1>
                                    </ul>)
                                else
                                    return (<ul className="color" id={`color${index+1}`}>
                                        <small>Color</small>
                                        <h1>{value.color}</h1>
                                    </ul>)
                            })  
                        }
                        
                    </div>
                    <div className="buttons">
                        <a className="btn btn-primary">ADD TO CART</a>
                        <a></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Slide
