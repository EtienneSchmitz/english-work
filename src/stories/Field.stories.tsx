import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { FieldView, FieldProps } from "./field/FieldView";

export default {
  title: "Example/Field",
  component: FieldView,
} as Meta;

const Template: Story<FieldProps> = (args) => <FieldView {...args} />;

export const FieldWithoutRobot = Template.bind({});

FieldWithoutRobot.args = {
  field: { size : { width : 6, length : 9}},
};