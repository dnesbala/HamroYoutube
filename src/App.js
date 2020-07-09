import React, { useState, useEffect } from "react";
import { Navbar, Video, VideoList } from "./components";
import { Switch, Route } from "react-router-dom";
import youtubeApi from "./api/youtubeApi";

import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [searchData, setSearchData] = useState("");

  useEffect(() => {
    handleSearch("youtube");
  }, []);

  const handleSearch = async (searchTerm) => {
    const res = await youtubeApi.get("search", {
      params: {
        part: "snippet",
        key: "AIzaSyAhC5pts2VFfzbfpSOvBvtzg2hZDejOeqY",
        maxResults: 10,
        q: searchTerm,
      },
    });
    setSearchData(res.data);
  };
  return (
    <>
      <Navbar onSearch={handleSearch} />

      <Switch>
        <Route
          exact
          path="/"
          render={() => <VideoList searchData={searchData} />}
        />
        <Route
          path="/watch/:id"
          render={({ match }) => <Video match={match} />}
        />
      </Switch>
    </>
  );
};

export default App;
