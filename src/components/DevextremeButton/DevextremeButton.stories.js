import React from "react";
import Button from "./DevextremeButton";
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
  title: "Button",
  component: Button,
  decorators: [withKnobs, withA11y, withInfo],
};

export const DevButton = () => (
  <Button
    onClick={action("button-click")}
    text={text("Label", "Login")}
    disabled={boolean("Disabled", false)}
  />
);

export const accessible = () => (
  <Button
    onClick={action("accessible-click")}
    text={text("Label", "Login")}
    disabled={boolean("Disabled", false)}
  />
);

export const inaccessible = () => (
  <Button
    style={{ backgroundColor: "red", color: "darkRed" }}
    onClick={action("inaccessible-click")}
    text={text("Label", "Login")}
    disabled={boolean("Disabled", false)}
  />
);

// DevButton.story = {
//   parameters: {
//     info: { inline: true },
//   },
// };