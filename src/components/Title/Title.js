import React from "react";
import "./Title.css";

const Title = props => (
    <div className="titleBox">
        <div className="title">{props.children}</div>
        <div className="scores">Your Current Score is {props.score} and the High Score is {props.highscore}</div>
        
    </div>
);
export default Title;
