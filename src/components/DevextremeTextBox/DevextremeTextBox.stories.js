import React from "react";
import TextBox from './DevextremeTextBox'
import {
	withKnobs,
	text,
	boolean,
	number,
	select,
	object,
  } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { withA11y } from "@storybook/addon-a11y";
import { addDecorator } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

addDecorator(withInfo);
export default {
	title: "TextBox",
	component: TextBox,
	decorators: [withKnobs, withA11y, withInfo],
};

export const Text = () => (
	<TextBox placeholder = "LoginInput" value = {text("Text", "LoginInput")} readOnly = {boolean("Disabled", false)} />
);

export const accessibleText = () => (
	<TextBox placeholder = "LoginInput" value = {text("Text", "LoginInput")} readOnly = {boolean("Disabled", false)} />
);
  
export const inaccessibleText = () => (
	<TextBox placeholder = "LoginInput" value = {text("Text", "LoginInput")} readOnly = {boolean("Disabled", false)}     style={{ backgroundColor: "red", color: "darkRed" }}	/>
);
