export function selectBook(book) {
    //selectBook is an Action creator, it needs to return an action, which is an object with type property
    return {
        type: 'BOOK_SELECTED',
        payload: book //payload is a piece of data that describes the action that is being undertaken
    }
}