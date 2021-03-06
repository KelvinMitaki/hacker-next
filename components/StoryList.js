import React from "react";
import Link from "next/link";
const StoryList = ({ stories }) => {
  return (
    <div className="story-list">
      {stories.map(story => (
        <div className="story" key={story.id}>
          <h2 className="story-title">
            <a href={story.url}>{story.title}</a>
          </h2>
          <div className="story-details">
            <span>{story.points || 0} points</span>
            <Link href={`/story?id=${story.id}`}>
              <a>{story.comments_count || 0} comments</a>
            </Link>
          </div>
        </div>
      ))}
      <style jsx>{`
        .story-list {
          padding: 0 1em;
        }
        .story {
          padding: 1em 0;
        }
        .story-title {
          font-size: 1rem;
          font-weight: 400;
          margin: 0%;
          margin-bottom: 0.5em;
        }
        .story-details {
          font-weight: bold;
          font-size: 0.8rem;
        }
        .story-title a {
          color: #333;
          text-decoration: none;
        }
        .story-title a:hover,
        .story-details a:hover {
          text-decoration: underline;
        }
        .story-details span {
          margin-right: 1em;
        }
        .story-details a {
          color: #6600ff;
          text-decoration: none;
        }
      `}</style>
      <style global jsx>{`
        body,
        html {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        }
      `}</style>
    </div>
  );
};

export default StoryList;
