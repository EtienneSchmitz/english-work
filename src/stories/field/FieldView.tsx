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
  radius: number;
}

export enum Color {
  YELLOW = 0,
  BLUE = 1,
}

export interface FieldViewProps {
  field: {
    size: { width: number; length: number };
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
        <GeometryField field={this.props.field} width={width} height={height} />
        {this.props.ball ? <Ball ball={this.props.ball} /> : null}
        <Robot
          robot={{
            id: 1,
            position: {
              x: 1,
              y: 2,
              theta: 0,
            },
            radius: 0,
          }}
          color="yellow"
        ></Robot>
      </Canvas>
    );
  }
}
