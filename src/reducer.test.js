import {
  selectChoice,
  selectResult,
  clearSelects,
  changeUserName,
} from './actions';

import reducer from './reducer';

describe('reducer', () => {
  context('when previous state is undefined', () => {
    const initialState = {
      selects: [],
      result: null,
      userName: '',
    };

    it('returns initialState', () => {
      const state = reducer(undefined, { type: 'action' });

      expect(state).toEqual(initialState);
    });
  });

  describe('selectChoice', () => {
    it('changes selects', () => {
      const initialState = {
        selects: [],
      };

      const id = 1;

      const state = reducer(initialState, selectChoice(id));

      expect(state.selects).toHaveLength(1);
    });
  });

  describe('selectResult', () => {
    it('selects result', () => {
      const initialState = {
        result: null,
      };

      const state = reducer(initialState, selectResult(1));

      expect(state.result.id).toEqual(1);
    });
  });

  describe('clearSelects', () => {
    it('clears selects', () => {
      const initialState = {
        selects: [1],
      };

      const state = reducer(initialState, clearSelects());

      expect(state.selects).toHaveLength(0);
    });
  });

  describe('changeUserName', () => {
    it('changes user name', () => {
      const initialState = {
        userName: '',
      };

      const state = reducer(initialState, changeUserName({ name: 'userName', value: 'NaJeong' }));

      expect(state.userName).toEqual('NaJeong');
    });
  });
});
