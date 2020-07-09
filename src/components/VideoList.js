import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ searchData }) => {
  const { items, pageInfo } = searchData;

  if (!items) return <h1 className="text-search">Search something...</h1>;

  const videoItems = items.map((item, i) => (
    <VideoItem key={i} videoItem={item.snippet} videoId={item.id.videoId} />
  ));

  return (
    <div className="col-11 mx-auto">
      <span className="text-muted mt-2">
        About {pageInfo.totalResults} results (Results per page:{" "}
        {pageInfo.resultsPerPage})
      </span>
      {videoItems}
    </div>
  );
};

export default VideoList;
