import React, { Component } from "react";
import styled from "styled-components";

const SelectContainer = styled.div`
  padding: 0 10%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Select = styled.select`
  margin: 10px;
  width: 150px;
  padding: 5px 35px 5px 5px;
  font-size: 16px;
  border: 1px solid #ccc;
  height: 34px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: url(${require("../assets/dn_arrow.png")}) 96% / 15% no-repeat #eee;
`;

export default class SortList extends Component {
  render() {
    return (
      <SelectContainer>
        <h4>Sort by:</h4>
        <Select
          onChange={event => {
            console.log(event.target.value);
            this.props.sortBy(event.target.value);
          }}
        >
          <option value="default">Default</option>
          <option value="title">Title</option>
          <option value="date">Date</option>
          <option value="vote">Vote</option>
        </Select>
      </SelectContainer>
    );
  }
}
