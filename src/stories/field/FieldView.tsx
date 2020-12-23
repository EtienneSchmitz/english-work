import React from "react";
import { Canvas } from "react-three-fiber";
import { GeometryField } from "./components/Geometry";

export interface Robots {
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
    size: { width: number; length: number };
  };
  robots: {
    blue: Array<Robots>;
    yellow: Array<Robots>;
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
        }}
      >
        <GeometryField field={this.props.field} width={width} height={height} />
      </Canvas>
    );
  }
}
