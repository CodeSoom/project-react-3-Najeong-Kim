import resultData from './data/resultData';

import { equal } from './utils';

const initialState = {
  selects: [],
  result: null,
  userName: '',
};

const reducers = {
  selectChoice(state, { payload: { id } }) {
    return {
      ...state,
      selects: [
        ...state.selects,
        id,
      ],
    };
  },

  selectResult(state, { payload: { id } }) {
    return {
      ...state,
      result: resultData.find(equal('id', Number(id))),
    };
  },

  clearSelects(state) {
    return {
      ...state,
      ...initialState,
    };
  },

  changeUserName(state, { payload: { name, value } }) {
    return {
      ...state,
      [name]: value,
    };
  },
};

function defaultReducer(state) {
  return state;
}

export default function reducer(state = initialState, action) {
  return (reducers[action.type] || defaultReducer)(state, action);
}
