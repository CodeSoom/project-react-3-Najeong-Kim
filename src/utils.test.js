import { get, equal } from './utils';

describe('utils', () => {
  describe('get', () => {
    it('gets key', () => {
      const state = {
        text: '비타민',
      };

      const g = get('text');

      expect(g(state)).toBe('비타민');
    });
  });
  describe('equal', () => {
    it('compares key and value', () => {
      const state = {
        text: '비타민',
      };

      const e = equal('text', '비타민');

      expect(e(state)).toBeTruthy();
    });
  });
});
