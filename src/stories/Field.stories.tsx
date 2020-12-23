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

const yellow = [
  {
    id: 0,
    position: {
      x: 1.5,
      y: 1.12,
      theta: 3.14,
    },
  },
  {
    id: 1,
    position: {
      x: 1.5,
      y: 0,
      theta: 3.14,
    },
  },
  {
    id: 2,
    position: {
      x: 1.5,
      y: -1.12,
      theta: 3.14,
    },
  },
  {
    id: 3,
    position: {
      x: 0.55,
      y: 0,
      theta: 3.14,
    },
  },
  {
    id: 4,
    position: {
      x: 2.5,
      y: 0,
      theta: 3.14,
    },
  },
  {
    id: 5,
    position: {
      x: 3.6,
      y: 0,
      theta: 3.14,
    },
  },
];
const blue = [
  {
    id: 0,
    position: {
      x: -1.5,
      y: 1.12,
      theta: 3.14,
    },
  },
  {
    id: 1,
    position: {
      x: -1.5,
      y: 0,
      theta: 0,
    },
  },
  {
    id: 2,
    position: {
      x: -1.5,
      y: -1.12,
      theta: 0,
    },
  },
  {
    id: 3,
    position: {
      x: -0.55,
      y: 0,
      theta: 0,
    },
  },
  {
    id: 4,
    position: {
      x: -2.5,
      y: 0,
      theta: 0,
    },
  },
  {
    id: 5,
    position: {
      x: -3.6,
      y: 0,
      theta: 0,
    },
  },
];

FieldWithRobotAndBall.args = {
  field: { size: { width: 6, length: 9 } },
  robots: {
    blue: blue,
    yellow: yellow,
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
