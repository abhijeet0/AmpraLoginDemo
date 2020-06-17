import React from 'react';
import Button from 'devextreme-react/button';
import renderer from 'react-test-renderer';

// describe('DevextremeButton', () => {
//    it('renders without error', () => {
//       const tree = renderer
//       .create(<Button text = "Login"/>)
//       .toJSON();
//       expect(tree).toMatchSnapshot();
//    });
// });

// test('<Button /> renders with text as prop', () => {
//    const tree = renderer.create(
//      <Button text="Login" />
//    ).toJSON();
//    expect(tree).toMatchSnapshot();
//  });

it("renders loader component correctly", () => {
	const tree = renderer.create(<button />).toJSON();
	expect(tree).toMatchSnapshot();
});