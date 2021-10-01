import React from "react";

import '../style/Introduction.css'

class Introduction extends React.Component {
    render() {
       return (
          <div className="Introduction">
             <h1>My collection</h1>
             <div>A directory to all knowledge snippets I have captured.</div>
          </div>
       );
    }
 }

export default Introduction;