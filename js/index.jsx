var React = require('react');
var ReactDOM = require('react-dom');

var Board = function() {
    var lists = [];
    
    for (var i=0; i<3; i++) {        
        lists.push(<List />);
    }

    return (
        <div className="board">
            {lists}
        </div>
    );
};

var index = 1;

var List = function() {
    var title  = {
        1: 'Todo',
        2: 'Doing',
        3: 'Done'
    };

    var title = <h1> {title[index++]} </h1>;
    return (
        <div className="list">
            {title}
            <Card />
            <Card />
            <Card />
        </div>
    );
};

var Card = function() {
    return (
        <div className="card">
        </div>
    );
};


document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<Board />, document.getElementById('app'));
});