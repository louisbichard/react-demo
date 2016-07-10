var React = require('react');
var ReactDOM = require('react-dom');

export default function (props) {
    var style = {
        border: '1px solid red',
        height: '45px'
    };

    return (
        <div style={style} className="card">
            <p> {props.title} </p>
            <button onClick={props.onClick}></button>
        </div>
    );
};