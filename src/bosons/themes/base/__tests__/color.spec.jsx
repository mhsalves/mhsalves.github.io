import { expect } from '@jest/globals';
import colors from '../colors';

import mock from './__mock__/colors';

describe('testing: theme-base breakpoints', () => {
  test('should match primary color correctly', () => {
    expect(colors.primary).toEqual(expect.objectContaining(mock.primary));
  });
  test('should match secondary color correctly', () => {
    expect(colors.secondary).toEqual(expect.objectContaining(mock.secondary));
  });
  test('should match white color correctly', () => {
    expect(colors.white).toEqual(expect.objectContaining(mock.white));
  });
  test('should match coal color correctly', () => {
    expect(colors.coal).toEqual(expect.objectContaining(mock.coal));
  });
});
