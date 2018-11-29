import React, { Component } from "react";
import styled from "styled-components";

const VoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

export default class Vote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: props.counter || 0
    };
  }

  upVote() {
    this.updateCounter(+1);
  }

  downVote() {
    this.updateCounter(-1);
  }

  updateCounter(number) {
    let counter = this.state.counter + number;
    this.setState({ counter });
  }

  render() {
    const { counter } = this.state;
    return (
      <VoteContainer>
        <img
          height="13px"
          onClick={this.upVote.bind(this)}
          src={require("../assets/upvote.svg")}
          alt=""
        />
        <div>{counter}</div>
        <img
          height="13px"
          onClick={this.downVote.bind(this)}
          src={require("../assets/downvote.svg")}
          alt=""
        />
      </VoteContainer>
    );
  }
}
