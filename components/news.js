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
  constructor(props) {
    super(props);
    this.state = {
      counters: JSON.parse(localStorage.getItem("counters") || "{}")
    };
  }

  updateCounter(number, id) {
    // Use Number() function to prevent string concatenation
    // "|| 0" if value is "undefined" will set to "0"
    let counters = this.state.counters;
    let counter = Number(counters[id] || 0) + number;
    counters[id] = counter;
    this.setState({ counters });
    localStorage.setItem("counters", JSON.stringify(counters));
  }
  render() {
    const { news, sortBy } = this.props;
    const { counters } = this.state;
    let sortedNews = news.sort((a, b) => {
      switch (sortBy) {
        case "vote":
          return Number(counters[b.url] || 0) - Number(counters[a.url] || 0);
        case "date":
          return new Date(b.publishedAt) - new Date(a.publishedAt);
        case "title":
          const titleA = a.title.toUpperCase(); // ignore upper and lowercase
          const titleB = b.title.toUpperCase(); // ignore upper and lowercase
          return titleA > titleB ? 1 : titleA < titleB ? -1 : 0;
        default:
          return 0;
      }
    });
    return (
      <NewsContainer>
        {/* news data get from news in props which passed from parent */}
        {sortedNews.map((item, i) => {
          return (
            <NewsItem key={i}>
              <img width="124px;" height="124px" src={item.urlToImage} />
              <NewsText>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <DateTime>{item.publishedAt}</DateTime>
              </NewsText>
              {/* Used url as id because it is unique */}
              <Vote
                id={item.url}
                counter={counters[item.url]}
                updateCounter={this.updateCounter.bind(this)}
              />
            </NewsItem>
          );
        })}
      </NewsContainer>
    );
  }
}
