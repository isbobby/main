import React from "react";

class Backdrop extends React.Component {
    render() {
        console.log(this.props)

       return (
          <div>
              {this.props.children}
          </div>
       );
    }
 }

export default Backdrop;