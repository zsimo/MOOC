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


var Router = require("./router");
require("./styles/main.styl");

window.app = {
  init : function () {
      this.router = new Router();
      this.router.history.start();
  }
};

window.app.init();