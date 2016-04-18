/**
 * Created by simonesacchi on 17/04/16.
 */
var React = require("react");
var NavHelper = require("./components/nav-helper");


module.exports = React.createClass({
    displayName : "custom display name",

    render : function () {
        // return the current status
        return (
            <NavHelper>
                <nav className='top-nav top-nav-light cf' role='navigation'>
                    <input id='menu-toggle' className='menu-toggle' type='checkbox'/>
                    <label htmlFor='menu-toggle'>Menu</label>
                    <ul className='list-unstyled list-inline cf'>
                        <li>Labelr</li>
                        <li><a href='/repos'>Repos</a></li>
                        <li className='pull-right'><a href='/logout'>Logout</a></li>
                    </ul>
                </nav>
                <div className='container'>
                    {this.props.children}
                </div>
            </NavHelper>
        )
    }
});