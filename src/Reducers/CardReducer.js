const cardReducer = (state = { cardItem: [] }, action) => {
    switch (action.type) {
       case 'GET_CARD_ITEM': 
       const state1 = { cardItem: [ ...state.cardItem, ...action.payload] };
       return state1
       case 'RESET' : return state
       default: return state
    }
 }
 export default cardReducer;