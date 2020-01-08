import React, { Component } from 'react';
import grocery from './../../img/grocery.jpg';
import RightArrow from './../_util/RightArrow';
import $ from "jquery";

export class Products extends Component {

    hover(){
        
    }

    nohover(){
        
    }

    render() {
        return (
            <div className="instruction">
                <div className="left">
                    <img src={grocery}  />
                    <div className="box"></div>
                </div>

                <div className="right">
                    <h1>SCAN THROUGH.<br />
                        PICK WHAT YOU WANT.
                    </h1>
                    <p>
                        Sed ut perspiciatis unde omnis iste natus error sit 
                        voluptatem accusantium doloremque laudantium, 
                        totam rem aperiam, eaque ipsa quae ab illo inventore 
                        veritatis et quasi architecto beatae vitae dicta sunt 
                        explicabo. Nemo enim ipsam voluptatem quia voluptas 
                        sit aspernatur aut odit aut fugit, sed quia consequuntur
                        magni dolores eos qui ratione voluptatem sequi nesciunt.
                    </p>
                    <div className="bottom">
                        <a onMouseEnter={this.hover} onMouseLeave
                            ={this.onhover}>
                            EXPLORE PRODUCTS
                            <RightArrow />
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Products
