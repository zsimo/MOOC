/**
* Created by simonesacchi on 18/04/16.
*/
var React = require("react");
var localLinks = require("local-links");
var App = require("ampersand-app");

module.exports = React.createClass({
    displayName : "NavHelper",
    onClick : function (event) {

        var pathName = localLinks.getLocalPathname(event);

        if (pathName) {
            event.preventDefault();
            App.trigger("local-click", {someData : "data"});
            App.router.history.navigate(pathName);
        }
    },

    render : function () {
      // return the current status
      return (
          <div {...this.props} onClick={this.onClick}>
              {this.props.children}
          </div>
      )
    }
});