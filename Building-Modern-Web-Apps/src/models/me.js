/**
 * Created by simonesacchi on 19/04/16.
 */
var Model = require("ampersand-model");

module.exports = Model.extend({

    url : "https://api.github.com/user",

    ajaxConfig : function () {
        return {
            headers : {
                Authorization : "token " + this.token
            }
        };
    },

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

    onTokenChange : function () {
        window.localStorage.setItem("token", this.token);
        this.fetchInitialData();
    },

    fetchInitialData : function () {
        if (this.token) {
            this.fetch();
        }
    }
});