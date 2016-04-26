/**
 * Created by simonesacchi on 26/04/16.
 */
var Model = require("ampersand-model");

module.exports = Model.extend({
    props : {
        id : "number",
        name : "string",
        full_name : "string"
    }

});