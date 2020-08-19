import React, { Component } from "react";
import Axios from "axios";
import Error from "next/error";

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
        {this.props.stories.map(story => (
          <h2 key={story.id}>{story.title}</h2>
        ))}
      </div>
    );
  }
}

export default index;
