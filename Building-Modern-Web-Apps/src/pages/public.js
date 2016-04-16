/**
 * Created by simonesacchi on 16/04/16.
 */
var React = require("react");


module.exports = React.createClass({
    render : function () {
        // return the current status
        return <div className='container'>
                    <header role='banner'>
                        <h1>Labelr</h1>
                    </header>
                    <div>
                        <p>We label stuff for you, because, we cantrade;</p>
                        <a href='/login' className='button button-large'>
                            <span className='mega-octicon octicon-mark-github'></span> Login with GitHub
                        </a>
                    </div>
                </div>

    }
});