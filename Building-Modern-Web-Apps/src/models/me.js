/**
 * Created by simonesacchi on 19/04/16.
 */
var Model = require("ampersand-model");
var githubMixin = require("../helpers/github-mixin");
var RepoCollection = require("./repo-collection");

module.exports = Model.extend(githubMixin, {

    url : "https://api.github.com/user",

    initialize : function () {
        this.token = window.localStorage.getItem("token");

        this.on("change:token", this.onTokenChange);
    },

    props : {
        id : "number",
        login : "string",
        avatar_url : "string"
    },

    session : {
        token : "string"
    },

    collections : {
        repos: RepoCollection
    },

    onTokenChange : function () {
        window.localStorage.setItem("token", this.token);
        this.fetchInitialData();
    },

    fetchInitialData : function () {
        if (this.token) {
            this.fetch();
            this.repos.fetch();
        }
    }
});