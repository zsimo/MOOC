/**
 * Created by simonesacchi on 27/04/16.
 */
var Model = require("ampersand-model");
var xhr = require("xhr");
var App = require("ampersand-app");

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
    },

    update : function (attributes) {
        xhr({
            url: url,
            json: attributes,
            methos : "PATCH",
            header : {
                Autorization: "token " + App.me.token
            }
        });

    }

});