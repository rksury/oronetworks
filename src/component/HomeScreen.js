import React, {Component} from "react";
import {Header} from "./header";
import {Home} from "./home";
import {Section1} from "./section1";
import {Section2} from "./section2";
import {Section3} from "./section3";
import {Section5} from "./section5";
import {Section6} from "./section6";
import {Section7} from "./section7";
import {Section8} from "./section8";
import {Section9} from "./section9";
import {Section4} from "./section4";



export default class OroHome extends Component {
    render() {
        return (
            <div data-spy="scroll" data-target=".navbar-fixed-top" data-offset="100">
                <Header/>
                <Home/>
                <Section1/>
                <Section2/>
                <Section3/>
                <Section4/>
                <Section5/>
                <Section6/>
                <Section7/>
                <Section8/>
                <Section9/>
            </div>
        );
    }
}

