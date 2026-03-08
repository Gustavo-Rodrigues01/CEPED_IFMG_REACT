import React from "react";
class Mouse extends React.Component {
    state = { x: 0, y: 0 };
    handleMouseMove = e => this.setState({ x: e.clientX, y: e.clientY });

    render() {
        return (
            <div 
                onMouseMove={this.handleMouseMove}
                style={{ height: "200px", width: "300px", border: "1px solid red" }}
                >{this.props.render(this.state)}
            </div>
        )};
};
export default Mouse
