import React, { Component } from "react";
import Axios from "axios";
import Error from "next/error";
import StoryList from "../components/StoryList";
import Layout from "../components/Layout";
import Link from "next/link";

export class index extends Component {
  static async getInitialProps({ req, res, query }) {
    try {
      const page = Number(query.page) || 1;
      const res = await Axios.get(
        `https://node-hnapi.herokuapp.com/news?page=${page}`
      );
      return { stories: res.data, page };
    } catch (error) {
      return { statusCode: (error.response && error.response.status) || 503 };
    }
  }
  componentDidMount() {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then(reg => {
          console.log("reg successful", reg);
        })
        .catch(err => console.log("reg error", err));
    }
  }
  render() {
    if (this.props.statusCode) {
      return <Error statusCode={this.props.statusCode} />;
    }
    return (
      <Layout
        title="Hacker Next"
        description="A Hacker News clone built with Next js "
      >
        <StoryList stories={this.props.stories} />
        <footer>
          <Link href={`/?page=${this.props.page + 1}`}>
            <a>Next ({this.props.page + 1})</a>
          </Link>
        </footer>
        <style jsx>{`
          footer {
            padding: 1em;
          }
          footer a {
            font-weight: bold;
            text-decoration: none;
            color: black;
          }
        `}</style>
      </Layout>
    );
  }
}
export default index;
