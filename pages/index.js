import React, { Component } from "react";
import Axios from "axios";
import Error from "next/error";
import StoryList from "../components/StoryList";

export class index extends Component {
  static async getInitialProps() {
    try {
      const res = await Axios.get(
        "https://node-hnapi.herokuapp.com/news?page=1"
      );
      return { stories: res.data };
    } catch (error) {
      return { statusCode: error.response.status };
    }
  }
  render() {
    if (this.props.statusCode) {
      return <Error statusCode={this.props.statusCode} />;
    }
    return (
      <div>
        <h1>hacker next</h1>
        <StoryList stories={this.props.stories} />
      </div>
    );
  }
}
export default index;
