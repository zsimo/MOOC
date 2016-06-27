/**
 * Created by simonesacchi on 27/04/16.
 */
var React = require("react");
var ampersandMixin = require("ampersand-react-mixin");

module.exports = React.createClass({
    mixins : [ampersandMixin],

    displayName : "Label",

    getInitialState : function () {
        var name = this.props.label.name;
        var color = this.props.label.color;

        return {
            name : name,
            color : color
        };
    },

    onClick : function (event) {
        console.log("click");
    },

    onColorChange : function (event) {
        this.setState({
            color : event.target.value.slice(1)}
        );
    },

    onNameChange : function (event) {
        this.setState({
            name : event.target.value}
        );
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
        this.setState(this.getInitialState());
    },

    onEditClick : function (event) {
        event.preventDefault();
        this.props.label.editing = true;
    },

    render : function () {
        // return the current status
        var label = this.props.label;
        var color = this.state.color;
        var cssColor = "#" + color;

        var content = "";

        // editing
        if (label.editing) {
            content = (<form className='label'>
                        <span style={{backgroundColor : cssColor}} className='label-color avatar avatar-small avatar-rounded'>&nbsp;</span>
                        <input name='name' onChange={this.onNameChange} value={this.state.name}/>
                        <input name='color' onChange={this.onColorChange} value={cssColor}/>
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