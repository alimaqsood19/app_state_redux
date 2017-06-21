import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index.js';
import {bindActionCreators} from 'redux'; //action that is generated from action creator actually flows through all the reducers
//in our application
class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li 
                key={book.title}
                onClick={() => {this.props.selectBook(book)}} 
                className="list-group-item">
                {book.title}
                </li>
            )
        })
    }
    
    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    //Whatever is returned will show up as props inside BookList
    //returns an object, this object is available to our component as 'this.props', in this case its 'this.props.books'
    return {
        books: state.books
        //key of books, and a value of state.books, since the book reducers provides the array of books
    };
}
//whenever our application state changes, and our list of books changes, the container will instantly re-render with
//the new list of books, BookList will re-render

//mapDispatchToProps anything returned from this will end up as props on the BookList container 
function mapDispatchToProps(dispatch) {
    //Whenever seelctBook is called the result should be passed to all of our reducers
    return bindActionCreators({selectBook: selectBook}, dispatch); //This takes all the actions and make sures to
    //pass all the actions to all the reducers
}

//Promote BookList from component to a container, it needs to know about this new dispatch method, selectBook. Make it
//available as a prop.

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
//connect method pulled from react-redux library, requires two parameters, the first is a function and the second
//is the component, this in return creates a container