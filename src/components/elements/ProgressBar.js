import React from "react";
import Resume from "../../resume.json";

function ProgressBar(props) {
  return (
    <div>
      <span className="title is-5 is-spaced">{props.text}</span>
      <span className="subtitle is-6 skill-percentage"></span>
      {Resume.basics.profiles.map((value, index) => {
        return (
          <span className="icon is-medium is-">
            <i className={value.icon}></i>
          </span>
        );
      })}
    </div>
  );
}

export default ProgressBar;
