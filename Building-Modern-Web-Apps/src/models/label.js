/**
 * Created by simonesacchi on 27/04/16.
 */
var Model = require("ampersand-model");

module.exports = Model.extend( {

    //url : function () {
    //    console.log("https://api.github.com/repos/" + this.parent.full_name + "/labels");
    //    return "https://api.github.com/repos/" + this.parent.full_name + "/labels";
    //},

    props : {
        name : "string",
        color : "string"
    },

    session : {
        editing : {
            type : "boolean",
            default : false
        }
    }

});