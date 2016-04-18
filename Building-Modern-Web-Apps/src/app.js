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
require("./styles/main.styl");

App.extend({
  init : function () {
      this.router = new Router();
      this.router.history.start();
  }
});

App.init();

App.on("local-click", function (data) {
    console.log(arguments);
});