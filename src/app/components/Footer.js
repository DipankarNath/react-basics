import React from "react";

export const Footer = (props) => {
    return(
        <footer className="footer">
            <div className="container">
                <p className="text-muted">{props.footerText}</p>
            </div>
        </footer>
    );
};