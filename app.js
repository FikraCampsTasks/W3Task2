import React, { Component } from "react";
import ReactDOM from "react-dom";
// Import custom components
import Navigation from "./components/navigation";
import News from "./components/news";

class App extends Component {
  constructor() {
    super();
    this.state = {
      news: [],
      searchValue: ""
    };
    // Call for first create of App
    this.getNews();
  }

  // Get news from newsapi.org
  getNews(searchTerm = "Iraq") {
    fetch(
      `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=978d6c3818ff431b8c210ae86550fb1f`
    )
      .then(response => {
        //Convert result to JSON data and pass it to next then
        return response.json();
      })
      .then(data => {
        // Store json data fro response in App state
        this.setState({
          news: data.articles
        });
      })
      .catch(err => {
        //Catch function must implement to prevent any crash in application
        console.log(err);
      });
  }

  //Call when SearchBox change value
  onInputChange(event) {
    this.setState({
      searchValue: event.target.value
    });
  }

  //Call when key of keyboard up when use SearchBox
  onKeyUp(event) {
    //Filter key to work with "Enter" key only.
    if (event.key == "Enter") {
      this.getNews(this.state.searchValue);
      this.setState({
        searchValue: ""
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <Navigation
          onChange={this.onInputChange.bind(this)}
          onKeyUp={this.onKeyUp.bind(this)}
          value={this.state.searchValue}
        />
        <News news={this.state.news} />
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
