import React, { Component } from "react";
import styled from "styled-components";
import SearchBox from "./searchBox";
import SortList from "./sortList";

const NavigationContainer = styled.header`
  display: flex;
  padding: 0px 10%;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 2px 25px rgba(0, 0, 0, 0.16);
  height: 100px;
`;

export default class Navigation extends Component {
  render() {
    return (
      <NavigationContainer>
        <img width="150px;" src={require("../assets/logo.png")} />
        <SortList sortBy={this.props.sortBy} />
        <SearchBox
          // onChange and onKeyUp implemented in App class
          onChange={this.props.onChange}
          onKeyUp={this.props.onKeyUp}
          value={this.props.value}
          placeholder="search term"
        />
      </NavigationContainer>
    );
  }
}
