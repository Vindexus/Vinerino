// Link.react-test.js
import React from 'react';
import Money from '../Components/Money';
import renderer from 'react-test-renderer';

import {shallow} from 'enzyme';

test('10 cents', () => {
  const component = renderer.create(
    <Money amount={10} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  let money = shallow(
    <Money amount={10} />
  );

  expect(money.text()).toEqual('$0.10');
})

test('100 cents', () => {
  const component = renderer.create(
    <Money amount={100} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  let money = shallow(
    <Money amount={100} />
  );

  expect(money.text()).toEqual('$1.00');
})


test('101 cents', () => {
  const component = renderer.create(
    <Money amount={101} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  let money = shallow(
    <Money amount={101} />
  );

  expect(money.text()).toEqual('$1.01');
})

test('110 cents', () => {
  const component = renderer.create(
    <Money amount={110} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  let money = shallow(
    <Money amount={110} />
  );

  expect(money.text()).toEqual('$1.10');
})

test('1000 cents', () => {
  const component = renderer.create(
    <Money amount={1000} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  let money = shallow(
    <Money amount={1000} />
  );

  expect(money.text()).toEqual('$10');
})

test('10000 cents', () => {
  const component = renderer.create(
    <Money amount={10000} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  let money = shallow(
    <Money amount={10000} />
  );

  expect(money.text()).toEqual('$100');
})


test('100000 cents', () => {
  const component = renderer.create(
    <Money amount={100000} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  let money = shallow(
    <Money amount={100000} />
  );

  expect(money.text()).toEqual('$1k');
})
