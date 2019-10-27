import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Example from '../index';

describe('testing: Example component', () => {
  test('should render correctly', () => {
    const ExampleComponent = renderer.create(<Example />).toJSON();
    expect(ExampleComponent).toMatchSnapshot();
  });
  test('should has the example text', () => {
    const ExampleComponent = shallow(<Example />);
    expect(ExampleComponent.text()).toEqual('Example Component');
  });
});
