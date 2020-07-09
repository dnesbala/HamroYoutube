import React, { useState, useEffect } from "react";

import youtubeApi from "../api/youtubeApi";

const Video = ({ match }, searchData) => {
  const { id } = match.params;

  const [details, setDetails] = useState([]);
  const { channelTitle, title, description, publishedAt } = details;

  useEffect(() => {
    try {
      const fetchDetails = async () => {
        const res = await youtubeApi.get("videos", {
          params: {
            part: "snippet",
            key: "AIzaSyAhC5pts2VFfzbfpSOvBvtzg2hZDejOeqY",
            id,
          },
        });
        setDetails(res.data.items[0].snippet);
      };
      fetchDetails();
    } catch (err) {
      console.log(err);
    }
  }, [id]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-11 col-md-10 mx-auto">
          <div className="embed-responsive embed-responsive-16by9 my-3">
            <iframe
              src={`https://www.youtube.com/embed/${id}`}
              className="embed-responsive-item"
              frameBorder={0}
              title="Youtube video"
            ></iframe>
          </div>
          <h4>{title}</h4>
          <p>
            {new Date(publishedAt).toLocaleString("en-US", {
              dateStyle: "long",
              timeStyle: "short",
            })}
          </p>
          <hr />
          <h6>{channelTitle}</h6>
          <button className="subscribe-button">Subscribe</button>
          <p className="mb-5">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Video;
