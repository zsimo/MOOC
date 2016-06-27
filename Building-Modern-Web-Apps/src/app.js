//var React = require("react");
//require("./styles/main.styl");
//
//var Hello = React.createClass({
//    render : function () {
//        // return the current status
//        return <div>Hello, {this.props.name}</div>;
//    }
//});
//
//React.render(<Hello name="simone"/>, document.body);

// return always a singleton object
var App = require("ampersand-app");
var Router = require("./router");
var Me = require("./models/me");
require("./styles/main.styl");
var icons = require("octicons/octicons/octicons.css");

App.extend({
  init : function () {
      this.me = new Me();
      this.me.fetchInitialData();
      this.router = new Router();
      this.router.history.start();
  }
});

App.init();

// example of pub/sub mechanism implementation
App.on("local-click", function (data) {
    console.log(arguments);
});