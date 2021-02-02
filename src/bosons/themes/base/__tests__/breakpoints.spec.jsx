import { expect } from '@jest/globals';
import breakpoints from '../breakpoints';

import mock from './__mock__/breakpoints';

describe('testing: theme-base breakpoints', () => {
  test('should match labels correctly', () => {
    const labels = Object.keys(breakpoints);
    expect(labels).toEqual(expect.arrayContaining(mock.labels));
  });
  test('should match min-widths correctly', () => {
    expect(breakpoints).toEqual(expect.objectContaining(mock.data));
  });
});
