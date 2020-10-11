import React from "react";
import { Link } from 'react-router-dom'
import './style.css';

export const SelectGameType = (props) => {
  return (
    <div>
      <div style={{ width: "100%", height: "50vh"}} className="ui horizontal segments">
        <div id="select1" style={{ fontSize: "4rem", display: "flex", width: "50%", height: "100%", justifyContent: "center", alignItems: "center"}} className="ui segment">
            <div>
                <Link style={{color: "black"}} to="/phonics/select-level">Practice</Link>
            </div>
        </div>
        <div id="select2" style={{ fontSize: "4rem", display: "flex", width: "50%", height: "100%", justifyContent: "center", alignItems: "center"}} className="ui segment">
          <div>
            <Link style={{color: "black"}} onClick={()=>props.setGameType('competitve')} to="/phonics/select-level">competitive</Link>
          </div>
        <div>
</div>
        </div>
      </div>
    </div>
  );
};
