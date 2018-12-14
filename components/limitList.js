import React, { Component } from "react";
import styled from "styled-components";

const SelectContainer = styled.div`
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Select = styled.select`
  margin: 10px;
  width: 75px;
  padding: 5px 35px 5px 5px;
  font-size: 16px;
  border: 1px solid #ccc;
  height: 34px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: url(${require("../assets/dn_arrow.png")}) 96% / 15% no-repeat #eee;
`;

export default class LimitList extends Component {
  render() {
    return (
      <SelectContainer>
        <h4>Show only :</h4>
        <Select
          onChange={event => {
            this.props.showOnly(event.target.value);
          }}
        >
          <option value="15">15</option>
          <option value="10">10</option>
          <option value="5">5</option>
        </Select>
      </SelectContainer>
    );
  }
}
