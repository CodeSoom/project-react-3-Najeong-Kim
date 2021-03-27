import resultListData from './resultListData';

import { equal } from './utils';

const initialState = {
  selects: [],
  result: null,
};

const reducers = {
  selectChoice(state, { payload: { choiceId } }) {
    return {
      ...state,
      selects: [
        ...state.selects,
        choiceId,
      ],
    };
  },

  selectResult(state, { payload: { id } }) {
    return {
      ...state,
      result: resultListData.find(equal('id', Number(id))),
    };
  },
};

function defaultReducer(state) {
  return state;
}

export default function reducer(state = initialState, action) {
  return (reducers[action.type] || defaultReducer)(state, action);
}
