/**
 * Created by simonesacchi on 16/04/16.
 */
var App = require("ampersand-app");
var Router = require("ampersand-router");
var React = require("react");
var Repos = require("./pages/repos");
var Public = require("./pages/public");
var Layout = require("./layout");
var qs = require("qs");
var xhr = require("xhr");


module.exports = Router.extend({
    renderPage : function (page, opt) {
        if (opt.layout) {
            page = <Layout me={App.me}>{page}</Layout>;
        }
        React.render(page, document.body)
    },
    routes : {
        "" : "public",
        "repos" : "repos",
        "login" : "login",
        "logout" : "logout",
        "auth/callback?:query" : "authCallback"
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
    },

    login : function () {
        window.location = "https://github.com/login/oauth/authorize?" + qs.stringify({
                client_id : "f8dd69187841cdd22a26",
                redirect_uri : window.location.origin + "/auth/callback",
                scope : "user,repo"
            });
    },

    logout : function () {
        window.localStorage.clear();
        window.location = "/";
    },

    authCallback : function (query) {
        query = qs.parse(query);
        console.log(query);
        xhr({
            url : "https://labelr-dev.herokuapp.com/authenticate/" + query.code,
            json : true
        }, function (err, req, body) {
            console.log(body);
            App.me.token = body.token;
            this.redirectTo("/repos");
        }.bind(this));
    }
});