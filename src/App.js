import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
// import Counter from "./components/Counter";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends: friends,
    clicked: false,
    count: 0
  };
  
  clickFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    // const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    
    if ( this.state.clicked = true) {
      console.log("You clicked WRONG! and have lost game.");
    } else {
      console.log("You clicked RIGHT!");
      this.setState({ clicked: this.state.clicked = true});
      console.log(this.state.clicked);
      // this.setState({ friends });
      this.setState({ count: this.state.count + 1 });
    }
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Friends List Count: {this.state.count}</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            clickFriend={this.clickFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
