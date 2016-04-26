/**
 * Created by simonesacchi on 26/04/16.
 */
var App = require("ampersand-app");

module.exports = {
    ajaxConfig : function () {
        return {
            headers : {
                Authorization : "token " + App.me.token
            }
        };
    }
};