import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { FieldView, FieldViewProps } from "./field/FieldView";

export default {
  title: "Example/Field",
  component: FieldView,
} as Meta;

const canvasSize = { width: 1080, height: 700 };

const Template: Story<FieldViewProps> = (args) => {
  return (
    <div style={canvasSize}>
      <FieldView {...args} />;
    </div>
  );
};

export const FieldWithoutRobot = Template.bind({});

FieldWithoutRobot.args = {
  field: { size: { width: 6, length: 9 } },
  robots: {
    blue: [],
    yellow: [],
  },
  container: canvasSize,
};

export const FieldWithRobotAndBall = Template.bind({});

FieldWithRobotAndBall.args = {
  field: { size: { width: 6, length: 9 } },
  robots: {
    blue: [],
    yellow: [],
  },
  ball: {
    position: {
      x: 0,
      y: 0,
    },
    radius: 0.0215,
  },
  container: canvasSize,
};
