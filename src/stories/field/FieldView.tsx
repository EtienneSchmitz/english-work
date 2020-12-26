import React from "react";
import { Canvas } from "react-three-fiber";
import { Ball } from "./components/Ball";
import { GeometryField } from "./components/Geometry";
import { Robot } from "./components/Robot";

export interface Robots {
  id: number;
  position: {
    x: number;
    y: number;
    theta: number;
  };
}

export enum Color {
  YELLOW = 0,
  BLUE = 1,
}

export interface FieldViewProps {
  field: {
    width: number;
    length: number;
    center_radius: number; // X et Y necessaire ?
    goal: {
      width: number;
      depth: number;
    };
    penalty: {
      width: number;
      depth: number;
    };
  };
  robots: {
    blue: Array<Robots>;
    yellow: Array<Robots>;
  };
  ball: {
    position: {
      x: number;
      y: number;
    };
    radius: number;
  };
  container: {
    width: number;
    height: number;
  };
  color: string;
}

export interface FieldViewState {
  height: number;
  width: number;
}

export class FieldView extends React.Component<FieldViewProps, FieldViewState> {
  render() {
    const height = this.props.container.height - 10;
    const width = this.props.container.width;
    return (
      <Canvas
        orthographic
        camera={{
          left: -width / 2,
          right: width / 2,
          top: height / 2,
          bottom: -height / 2,
          near: 0.1,
          far: 1000,
          position: [0, 0, 1],
          zoom: 100,
        }}
      >
        <GeometryField field={this.props.field} color={this.props.color} />
        {this.props.robots.blue.map((item, index) => (
          <Robot robot={item} color="blue" radius={0.09} />
        ))}
        {this.props.robots.yellow.map((item, index) => (
          <Robot robot={item} color="yellow" radius={0.09} />
        ))}
        {this.props.ball ? <Ball ball={this.props.ball} /> : null}
      </Canvas>
    );
  }
}
