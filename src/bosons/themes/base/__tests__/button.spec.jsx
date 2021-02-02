import React from 'react';
import styled from 'styled-components';
import renderer from 'react-test-renderer';

import button from '../button';
import withTheme from '../../../../hoc/withTheme';

describe('testing: theme-base breakpoints', () => {
  test('should match primary button layout correctly', () => {
    const Button = styled.button`${button.primary}`;
    const ButtonWrapped = withTheme(Button);
    const buttonSnapshot = renderer.create(<ButtonWrapped />).toJSON();
    expect(buttonSnapshot).toMatchSnapshot();
  });
  test('should match secondary button layout correctly', () => {
    const Button = styled.button`${button.secondary}`;
    const ButtonWrapped = withTheme(Button);
    const buttonSnapshot = renderer.create(<ButtonWrapped />).toJSON();
    expect(buttonSnapshot).toMatchSnapshot();
  });
  test('should match small button size correctly', () => {
    const Button = styled.button`${button.primary}`;
    const ButtonWrapped = withTheme(Button);
    const buttonSnapshot = renderer.create(<ButtonWrapped isSmall />).toJSON();
    expect(buttonSnapshot).toMatchSnapshot();
  });
});
