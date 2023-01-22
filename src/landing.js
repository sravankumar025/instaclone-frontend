import React from "react"
import "./land.css";
import { useNavigate } from "react-router-dom";
import image from "./lens.png";
const Landing = ()=>{
    const navigate = useNavigate();
    return (
        <div id="container">
            <div id="image-container">
               <img src={image} alt="cameralens" width="100%" height="750px"/>
            </div>
            <div id="text-container">
                    <h1>10x Team 04</h1> 
                    <button onClick={()=>{navigate("postview")}}>Enter</button>
            </div>
        </div>
    )
}

export default Landing