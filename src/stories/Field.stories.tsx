import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { Field, FieldProps } from "./field/Field";

export default {
  title: "Example/Field",
  component: Field,
} as Meta;

const Template: Story<FieldProps> = (args) => <Field {...args} />;

export const FieldWithoutRobot = Template.bind({});

FieldWithoutRobot.args = {
  field: { size : { width : 5, height : 6}},
};