import React, { Component } from "react";
import Axios from "axios";
import Error from "next/error";
import Layout from "../components/Layout";

export class story extends Component {
  static async getInitialProps({ req, res, query }) {
    try {
      const res = await Axios.get(
        `https://node-hnapi.herokuapp.com/item/${query.id}`
      );
      return { story: res.data };
    } catch (error) {
      return { statusCode: error.response.status };
    }
  }
  render() {
    const { story, statusCode } = this.props;
    if (statusCode) {
      return <Error statusCode={statusCode} />;
    }

    return (
      <Layout title={story.title}>
        <main>
          <h1 className="story-title">
            <a href={story.url}>{story.title}</a>
          </h1>
          <div className="story-details">
            <strong>{story.points || 0} points</strong>
            <strong>{story.comments_count || 0} comments</strong>
            <strong>{story.time_ago}</strong>
          </div>
          <style global jsx>{`
            body,
            html {
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
                Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
                sans-serif;
            }
          `}</style>
          <style jsx>{`
            main {
              padding: 1em;
            }
            .story-title {
              font-size: 1.2rem;
              margin: 0;
              font-weight: 300;
              padding-bottom: 0.5em;
            }
            .story-title a {
              color: #333;
              text-decoration: none;
            }
            .story-title a:hover {
              text-decoration: underline;
            }
            .story-details {
              font-size: 0.8rem;
              padding-bottom: 1em;
              border-bottom: 1px solid rgba(0, 0, 0, 0.1);
              margin-bottom: 1em;
            }
            .story-details strong {
              margin-right: 1em;
            }
            .story-details a {
              color: #f60;
            }
          `}</style>
        </main>
      </Layout>
    );
  }
}

export default story;
