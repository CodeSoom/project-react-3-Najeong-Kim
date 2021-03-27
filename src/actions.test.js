import {
  selectChoice,
} from './actions';

import choiceData from '../fixtures/choiceData';

describe('actions', () => {
  describe('selectChoice', () => {
    const { text: { choices } } = choiceData[0];
    it('selects choiceId', () => {
      expect(selectChoice(choices[0].choiceId).payload.choiceId).toEqual(1);
    });
  });
});
