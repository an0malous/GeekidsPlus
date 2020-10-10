import React from "react";
import { Link } from 'react-router-dom';

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
        <Link to="/phonics/select-mode" onClick={()=>props.setGameLevel('initSounds')}>InitSounds-Bronze</Link>
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
          <Link to="/phonics/select-mode" onClick={()=>props.setGameLevel('cvc')}>CVC- silver</Link>
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
          <Link to="/phonics/select-mode" onClick={()=>props.setGameLevel('cvcAdd')}>CVC with simple Blends - gold</Link>
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
            <Link to="/phonics/select-mode" onClick={()=>props.setGameLevel('blends')}>CVC with difficult Blends - platnium</Link>
          </div>
        </div>
    
  );
};
