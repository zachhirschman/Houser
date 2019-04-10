import React, { Component } from "react"
import "./header.css"
import { Link } from "react-router-dom"

export default function Header(){
    return(
        <div className = "header">
        <Link to = "/"><img className = "logo" src = "https://raw.githubusercontent.com/DevMountain/simulation-2/master/assets/houser_logo.png"></img></Link>
        <h1 className = "Houser">Houser</h1>
        </div>
    )
}