import React from "react";
import "./Title.css";

const Title = props => (
    <div className="titleBox">
        <div className="title">{props.children}</div>
        <div className="scores">Current Score: {props.score} High Score: {props.highscore}</div>
    </div>
);
export default Title;
