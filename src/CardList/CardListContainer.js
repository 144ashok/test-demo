import { connect } from 'react-redux'
import CardList from './CardList';
import { reset } from '../Actions/CardAction';
import {loadCardItem} from '../Middleware/CardMiddleWare';

const mapStateToProps = (state) => {
   return {
      cardItem: state.cardReducer.cardItem
   };
};
const mapDispatchToProps = (dispatch) => {
   return {
      getScrollItem: (page) => dispatch(loadCardItem(page)),
      reset: () => dispatch(reset())
   };
};
export default connect(mapStateToProps, mapDispatchToProps)(CardList);