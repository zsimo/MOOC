/**
 * Created by simonesacchi on 26/04/16.
 */
var React = require("react");
var ampersandMixin = require("ampersand-react-mixin");
var Label = require("../components/label");

module.exports = React.createClass({
    mixins : [ampersandMixin],
    displayName : "RepoDetail",
    render : function () {
        var repo = this.props.repo;
        var labels = this.props.labels;
        // return the current status
        return (
            <div className='container'>
                <h1>{repo.full_name}</h1>
                <p></p>
                <ul>
                    {
                        labels.map(function (label) {
                            return <li><Label label={label}></Label></li>
                        })
                    }
                </ul>
            </div>
        )
    }
});

