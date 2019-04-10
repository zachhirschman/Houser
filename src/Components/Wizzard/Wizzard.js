import React, { Component } from "react"
import { Link, Route } from "react-router-dom"
import StepOne from "../StepOne/StepOne"
import StepTwo from "../StepTwo/StepTwo"
import StepThree from "../StepThree/StepThree"
 
export default class Wizzard extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div>
                Wizzard
                <Link to = "/"><button>Cancel</button></Link>
                <Route component ={StepOne} path = "/wizzard/StepOne" />
                <Route component ={StepTwo} path = "/wizzard/StepTwo" />
                <Route component ={StepThree} path = "/wizzard/StepThree" />
            </div>
        )
    }
}