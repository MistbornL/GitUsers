import React from "react";
import "./typeahead.css";

export const TypeAhead = ({ item }) => {
  return (
    <div className="typeahead-wrapper">
      <a href={item.html_url} target="_blank" rel="noopener noreferrer">
        <div className="typeahead-section">
          <img src={item.avatar_url} alt="avatar" />
          <h1>
            Username: <span>{item.login}</span>
          </h1>
        </div>
      </a>
    </div>
  );
};
