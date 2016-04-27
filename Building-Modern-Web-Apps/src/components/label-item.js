/**
 * Created by simonesacchi on 27/04/16.
 */
var React = require("react");

module.exports = React.createClass({
    displayName : "Label",
    onClick : function (event) {
        console.log("click");
    },

    render : function () {
        // return the current status
        var label = this.props.label;
        return (
            <li>{label.color}</li>
        )
    }
});