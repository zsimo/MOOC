var React = require("react");
var styles = require("./styles/main.css");

var Hello = React.createClass({
    render : function () {
        // return the current status
        return <div>Hello, {this.props.name}</div>;
    }
});

React.render(<Hello name="simone"/>, document.body);