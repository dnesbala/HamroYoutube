import React from "react";
import { Link } from "react-router-dom";

const VideoItem = ({ videoItem, videoId }) => {
  const {
    thumbnails,
    title,
    description,
    channelTitle,
    publishedAt,
  } = videoItem;

  return (
    <Link
      to={`/watch/${videoId}`}
      className="text-decoration-none text-black-50"
    >
      <div className="row my-4">
        <div className="col-11 col-md-3">
          <img src={thumbnails.medium.url} alt={title} className="img-fluid" />
        </div>
        <div className="col-11 col-md-6">
          <h5 style={{ cursor: "pointer" }}>
            <strong>{title}</strong>
          </h5>
          <div className="text-muted">
            <p>
              {channelTitle} ||{" "}
              {new Date(publishedAt).toLocaleString("en-US", {
                dateStyle: "long",
                timeStyle: "short",
              })}
            </p>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoItem;
