import React, { Component } from "react";
import styled from "styled-components";

const VoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

export default class Vote extends Component {
  upVote() {
    this.props.updateCounter(+1, this.props.id);
  }

  downVote() {
    this.props.updateCounter(-1, this.props.id);
  }
  
  render() {
    const { counter } = this.props;
    return (
      <VoteContainer>
        <img
          height="13px"
          onClick={this.upVote.bind(this)}
          src={require("../assets/upvote.svg")}
          alt=""
        />
        <div>{counter || 0}</div>
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
