/**
 * Created by simonesacchi on 27/04/16.
 */
var React = require("react");
var ampersandMixin = require("ampersand-react-mixin");

module.exports = React.createClass({
    mixins : [ampersandMixin],

    displayName : "Label",
    onClick : function (event) {
        console.log("click");
    },

    onDeleteClick : function (event) {
        event.preventDefault();
        alert("delete");

        //this.props.label.destroy({
        //    success : function () {
        //        console.log("success");
        //    },
        //    error : function () {
        //        console.log("error");
        //    }
        //});
    },

    onCancelClick : function (event) {
        event.preventDefault();
        this.props.label.editing = false;
    },

    onEditClick : function (event) {
        event.preventDefault();
        this.props.label.editing = true;
    },

    render : function () {
        // return the current status
        var label = this.props.label;
        var cssColor = "#" + label.color;

        var content = "";

        // editing
        if (label.editing) {
            content = (<form className='label'>
                        <span className='label-color avatar avatar-small avatar-rounded'>&nbsp;</span>
                        <input name='name'/>
                        <input name='color'/>
                        <button type='submit' className='button button-small'>Save</button>
                        <button onClick={this.onCancelClick} type='button' className='button button-small button-unstyled'>cancel</button>
                    </form>);
        } else {
            content = (
                <div className='label'>
                    <span className='label-color' style={{backgroundColor:cssColor}}>&nbsp;</span>
                    <span>{label.name}</span>
                    <span onClick={this.onEditClick} className='octicon octicon-pencil'></span>
                    <span onclick={this.onDeleteClick} className='octicon octicon-x'></span>
                </div>
            );
        }

        return (
            <div>
                {content}
            </div>
        )
    }
});