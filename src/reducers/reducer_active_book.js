function ActiveBook(state = null, action) { //reducers only ever called when an action occurs
    //state is not application state, but however the state this reducer is responsible for
    switch(action.type) {
        case 'BOOK_SELECTED':
        return action.payload; //this case is what we care about, and if this is the case it will return
            //the action.payload
    }
    return state;

}

export default ActiveBook;