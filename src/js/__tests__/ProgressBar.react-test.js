// Link.react-test.js
import React from 'react';
import ProgressBar from '../Components/ProgressBar';
import Money from '../Components/Money';
import renderer from 'react-test-renderer';

import {shallow} from 'enzyme';

const matcherinoProp = {
  lastStretch: {
    goal: 30000 //Last goal is at $300
  },
  currentAmount: 20000, //Currently at $200
  progress: 2/3
}

test('Component: ProgressBar', () => {
  const component = renderer.create(
    <ProgressBar matcherino={matcherinoProp} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  let pb = shallow(
    <ProgressBar matcherino={matcherinoProp} />
  );

  const props = pb.props()
  const innerBarProps = props.children[0].props.children.props
  expect(innerBarProps.style.width).toEqual('66.67%')
  expect(pb.find('Money')).toHaveLength(2);
})