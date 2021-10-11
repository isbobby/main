import React from "react";

import '../style/Content.css'
import { GridBox } from "./BoxLibrary";

class CustomGridBox extends React.Component {
    state = {
        BoxBackground: {
            background: 'white'
        },
        textColor: {
            color: 'black'
        }
    }

    render() {
        return (
            <div className="CustomGridBox">
                <a target="" href={this.props.link} style={{ textDecoration: 'none' }}>
                    <GridBox 
                        onMouseOver={(event) => this.highlight(event)} 
                        onMouseLeave={(event) => this.deHighlight(event)}
                        style={this.state.BoxBackground}>

                        <div style={this.state.textColor}>
                            {this.props.description}
                        </div>
                        
                    </GridBox>
                </a>
            </div>
        );
    }

    highlight(e) {
        this.setState({
            BoxBackground: {
                background: 'black'
            },
            textColor: {
                color: 'white',
                textDecoration: 'None'
            }
        })
    }

    deHighlight(e) {
        this.setState({
            BoxBackground: {
                background: 'white'
            },
            textColor: {
                color: 'black',
                textDecoration: 'None'
            }
        })
    }
}

export default CustomGridBox;