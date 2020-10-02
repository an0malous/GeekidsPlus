import React from "react";
import { Link } from 'react-router-dom'

export const SelectGameType = (props) => {
  return (
    <div>
      <div style={{ width: "100%", height: "50vh"}} className="ui horizontal segments">
        <div  style={{ fontSize: "4rem", display: "flex", width: "50%", height: "100%", background: "orange", justifyContent: "center", alignItems: "center"}} class="ui segment">
            <div>
                <Link path="/Phonics/select-level">Practice</Link>
            </div>
        </div>
        <div style={{fontSize: "4rem", display: "flex", width: "50%", height: "100%", background: "orange", justifyContent: "center", alignItems: "center"}} className="ui segment">
        <div>
        Competitve
</div>
        </div>
      </div>
    </div>
  );
};
