import React from "react";

import Background from "../img/background.jpg"

const BackdropStyle = {
    margin: 'auto',
    width: "100%",
    height: "998px",
    backgroundImage: "url(" + Background + ")",
    // backgroundSize: 'cover',
    // backgroundPosition: 'center',
    // backgroundRepeat: 'no-repeat',
}

const contentStyle = {
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(233, 222, 211, 0.8)',
}

class Backdrop extends React.Component {
    render() {
       return (
          <div style={BackdropStyle}>
              <div style={contentStyle}>
                {this.props.children}
              </div>
          </div>
       );
    }
 }

export default Backdrop;