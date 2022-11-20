import React from "react";

const JerseyMaker = ({ name, jerseyNum }) => {
  return (
    <div>
      <h2>{name.toUpperCase()}</h2>
      <h3>{jerseyNum}</h3>
    </div>
  );
};

export default JerseyMaker;
