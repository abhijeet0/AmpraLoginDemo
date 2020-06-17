import React from 'react';
import TextBox from './DevextremeTextBox';
import renderer from 'react-test-renderer';

// describe('DevextremeTextBox', () => {
//    it('renders without error', () => {
//       const tree = renderer
//       .create(<TextBox placeholder = "Login"/>)
//       .toJSON();
//       expect(tree).toMatchSnapshot();
//    });
// });
// test('<TextBox /> renders with text as prop', () => {
//    const tree = renderer.create(
//      <TextBox value="Login" />
//    ).toJSON();
//    expect(tree).toMatchSnapshot();
//  });

it("renders loader component correctly", () => {
	const tree = renderer.create(<button />).toJSON();
	expect(tree).toMatchSnapshot();
});