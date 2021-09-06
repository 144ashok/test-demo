export function getScrollItem(data) {
    return {
       type: 'GET_CARD_ITEM',
       payload: data
    }
 }

 export function reset() {
    return { type: 'RESET' }
 }