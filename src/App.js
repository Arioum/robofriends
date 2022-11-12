import React, { useState, useEffect } from "react";
import SearchBox from "./components/SearchBox";
import CardList from "./components/CardList";
import Scroll from "./components/Scroll";
import ErrorBoundry from "./components/ErrorBoundry";

import "./app.css";

const App = () => {
  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState("");

  const onSearchChange = (event) => {
    setSearchField({ searchField: event.target.value });
  };

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => setRobots({ robots: users }));
  }, []);

  return (
    <>
      {!robots.length ? (
        <h1 className="tc f1">Loading</h1>
      ) : (
        <div className="tc">
          <h1 className="f1">Robofriends</h1>
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filteredRobots} />
            </ErrorBoundry>
          </Scroll>
        </div>
      )}
    </>
  );
};

export default App;
