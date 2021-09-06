export const loadCardItem = (page) => {
    // see we're returning a function!
    return dispatch => {
      fetch(`https://jsonplaceholder.typicode.com/posts?_start=5&_limit=${page}`).then(res => res.json()).then((item) => {
          dispatch({ type: 'GET_CARD_ITEM', payload: item })
        }).catch(error => {
          dispatch({ type: 'GET_CARD_ITEM', payload: ['No data Found'] })
        })
    }
  }