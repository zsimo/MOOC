/**
 * Created by simonesacchi on 26/04/16.
 */
var Model = require("ampersand-model");
var githubMixin = require("../helpers/github-mixin");

module.exports = Model.extend(githubMixin, {

    url : function () {
        return "https://api.github.com/repos/" + this.full_name;
    },

    props : {
        id : "number",
        name : "string",
        full_name : "string"
    },

    derived : {
        appUrl : {
            deps : ["full_name"],
            fn : function () {
                return "/repo/" + this.full_name;
            }
        }
    }

});