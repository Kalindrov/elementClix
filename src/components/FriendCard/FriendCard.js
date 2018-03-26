import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className="card"onClick={() => props.clickFriend(props.id)}>
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
        {props.name}
    </div>
    <span >
    </span>
  </div>
);

export default FriendCard;
