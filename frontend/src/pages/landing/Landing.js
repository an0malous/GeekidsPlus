import React from 'react';

export const Landing = ({ updateUser, admin, handleSetOverlay }) => {

    return (
        <div>
            <div style={{
                position: "absolute",
                maxWidth: "600px",
                height: "auto",
                left: "3rem",
                top: "35%",
                Zindex: -1,
                fontSize: "3rem",
                color: "white",
                textShadow: "2px 2px black"}}>
                Your Cirriculum. Anytime. Anywhere.
            </div>
        </div>

    )
}