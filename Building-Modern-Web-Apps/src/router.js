/**
 * Created by simonesacchi on 16/04/16.
 */
var Router = require("ampersand-router");
var React = require("react");
var Repos = require("./pages/repos");
var Public = require("./pages/public");


module.exports = Router.extend({
    routes : {
        "" : "public",
        "repos" : "repos"
    },

    public : function () {
        console.log("public");
        React.render(<Public/>, document.body);
    },

    repos : function () {
        console.log("repos");
        React.render(<Repos/>, document.body);
    }
});