import * as actionTypes from '../actions/Actions';

const initialState = {
  results: []
}

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({id: new Date(), value: action.result})
      }
    case actionTypes.DELETE_RESULT:
      const updatedArray = state.results.filter(result => result.id !== action.resultId);
      return {
        ...state,
        results: updatedArray
      } 
  }
  return state;
};

export default Reducer;