import React from "react";

export const SelectGameLevel = (props) => {
  return (
    <div
      style={{ width: "100%", height: "50vh" }}
      className="ui horizontal segments"
    >
      <div
        style={{
          fontSize: "2rem",
          display: "flex",
          width: "25%",
          height: "100%",
          background: "orange",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="ui segment"
      >
        <div>InitSounds-Bronze</div>
        <div
          style={{
            fontSize: "2rem",
            display: "flex",
            width: "25%",
            height: "100%",
            background: "orange",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="ui segment"
        >
          <div>CVC- silver</div>
        </div>
        <div
          style={{
            fontSize: "2rem",
            display: "flex",
            width: "25%",
            height: "100%",
            background: "orange",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="ui segment"
        >
          <div>CVC with simple Blends - gold</div>
          <div
            style={{
              fontSize: "2rem",
              display: "flex",
              width: "25%",
              height: "100%",
              background: "orange",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="ui segment"
          >
            <div>CVC with difficult Blends - platnium</div>
          </div>
        </div>
      </div>
    </div>
  );
};
