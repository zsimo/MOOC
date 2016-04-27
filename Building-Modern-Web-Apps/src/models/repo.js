/**
 * Created by simonesacchi on 26/04/16.
 */
var Model = require("ampersand-model");
var githubMixin = require("../helpers/github-mixin");
var LabelCollection = require("./label-collection");

module.exports = Model.extend(githubMixin, {

    url : function () {
        return "https://api.github.com/repos/" + this.full_name;
    },

    collections : {
        labels: LabelCollection
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
    },

    fetch : function () {
        // overriding base fetch
        Model.prototype.fetch.apply(this, arguments);
        this.labels.fetch();
    }

});