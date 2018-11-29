import React, { Component } from "react";
import styled from "styled-components";
import NewsItem from "./newsItem";
import NewsText from "./newsText";
import DateTime from "./dateTime";
import Vote from "./vote";

const NewsContainer = styled.main`
  background-color: rgba(245, 246, 250, 0.8);
  padding: 0 10%;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default class News extends Component {
  render() {
    return (
      <NewsContainer>
        {/* news data get from news in props which passed from parent */}
        {this.props.news.map((item, i) => {
          return (
            <NewsItem key={i}>
              <img width="124px;" height="124px" src={item.urlToImage} />
              <NewsText>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <DateTime>{item.publishedAt}</DateTime>
              </NewsText>
              <Vote/>
            </NewsItem>
          );
        })}
      </NewsContainer>
    );
  }
}
