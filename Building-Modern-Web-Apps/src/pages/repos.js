/**
 * Created by simonesacchi on 16/04/16.
 */
var React = require("react");
var ampersandMixin = require("ampersand-react-mixin");

module.exports = React.createClass({
    mixins : [ampersandMixin],
    render : function () {
        var repos = this.props.repos;
        // return the current status
        return  <div>
                    <h2>Repos</h2>
                    <ul>
                        {repos.map(function (repo) {
                            return <li><a href="">{repo.full_name}</a></li>
                        })}
                    </ul>
                </div>
    }
});