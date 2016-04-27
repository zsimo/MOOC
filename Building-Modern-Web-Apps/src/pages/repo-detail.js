/**
 * Created by simonesacchi on 26/04/16.
 */
var React = require("react");

module.exports = React.createClass({
    displayName : "RepoDetail",
    render : function () {
        // return the current status
        return (
            <div className='container'>
                <h1>{this.props.repo.full_name}</h1>
                <p></p>
                <ul></ul>
            </div>
        )
    }
});

