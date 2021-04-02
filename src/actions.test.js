import {
  selectChoice,
} from './actions';

import choiceData from '../fixtures/choiceData';

describe('actions', () => {
  describe('selectChoice', () => {
    const { text: { choices } } = choiceData[0];
    it('selects choice id', () => {
      expect(selectChoice(choices[0].id).payload.id).toEqual(1);
    });
  });
});
