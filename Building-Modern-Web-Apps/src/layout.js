/**
 * Created by simonesacchi on 17/04/16.
 */
var React = require("react");
var NavHelper = require("./components/nav-helper");
var ampersandMixin = require("ampersand-react-mixin");


module.exports = React.createClass({
    mixins : [ampersandMixin],
    displayName : "custom display name",

    render : function () {
        var me = this.props.me;
        // return the current status
        return (
            <NavHelper>
                <nav className='top-nav top-nav-light cf' role='navigation'>
                    <input id='menu-toggle' className='menu-toggle' type='checkbox'/>
                    <label htmlFor='menu-toggle'>Menu</label>
                    <ul className='list-unstyled list-inline cf'>
                        <li>Labelr</li>
                        <li><a href='/repos'>Repos</a></li>
                        <li className='pull-right'><a href='/logout'>Logout</a> {me.login}</li>
                    </ul>
                </nav>
                <div className='container'>
                    {this.props.children}
                </div>
            </NavHelper>
        )
    }
});