var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('lodash');
import Card from './card';

var Board = React.createClass({
    getInitialState: function(){
        return {
            title: 'Board title',
            lists: [
                {
                    title: 'List 1 title',
                    cards: ['Card 1', 'Card 2', 'Card 3']
                },
                {
                    title: 'List 2 title',
                    cards: ['Card 1', 'Card 2', 'Card 3']
                }
            ]
        }
    },
    render: function() {
        return (
            <div className="board" >
                <List listDetail={this.state.lists[0]} cards={this.state.lists[0].cards} />
                <List listDetail={this.state.lists[1]} cards={this.state.lists[1].cards} />
            </div>
        );
    }
});

var index = 0;

var List = function(props) {

    var onClick = function(){
        console.log(' on click! ');
    };

    var title  = {
        1: 'Todo',
        2: 'Doing',
        3: 'Done'
    };

    var cards = _.reduce(props.cards, (prev, item, index) => {
        prev.push( <Card key={index} title={item} onClick={onClick}/> )
        return prev;
    }, []);

    var title = <h1> {title[++index]} </h1>;
    return (
        <div className="list">
            {props.listDetail.title}
            {cards}
        </div>
    );
};

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<Board />, document.getElementById('app'));
});