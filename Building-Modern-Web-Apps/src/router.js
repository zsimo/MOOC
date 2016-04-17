/**
 * Created by simonesacchi on 16/04/16.
 */
var Router = require("ampersand-router");
var React = require("react");
var Repos = require("./pages/repos");
var Public = require("./pages/public");
var Layout = require("./layout");


module.exports = Router.extend({
    renderPage : function (page, opt) {
        if (opt.layout) {
            page = <Layout>{page}</Layout>;
        }
        React.render(page, document.body)
    },
    routes : {
        "" : "public",
        "repos" : "repos"
    },

    public : function () {
        console.log("public");
        //React.render(<Public/>, document.body);
        this.renderPage(<Public/>, {layout: false});
    },

    repos : function () {
        console.log("repos");
        //React.render(<Repos/>, document.body);
        this.renderPage(<Repos/>, {layout: true});
    }
});