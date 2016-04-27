/**
 * Created by simonesacchi on 27/04/16.
 */
var Collection = require("ampersand-rest-collection");
var Label = require("./label");
var githubMixin = require("../helpers/github-mixin");

module.exports = Collection.extend(githubMixin, {
    url : function () {
        return this.parent.url() + "/labels";
    },
    model : Label

    //getByFullName : function (fullName) {
    //    var model = this.findWhere({full_name : fullName});
    //
    //    if (!model) {
    //        model = new Repo({full_name : fullName});
    //    }
    //
    //    model.fetch();
    //
    //    return model;
    //}
});