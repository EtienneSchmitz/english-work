import React from "react";
import ReactDOM from "react-dom";
import { Canvas } from "react-three-fiber";
import { GeometryField } from "./components/geometry";

export interface FieldProps {
  field: {
    size: { width: number; length: number };
  };
}

export interface FieldState {
  height: number;
  width: number;
}

export class FieldView extends React.Component<FieldProps, FieldState> {
  private canvas: React.RefObject<HTMLDivElement>;

  constructor(props: FieldProps) {
    super(props);
    this.state = { height: 0, width: 0 };
    this.canvas = React.createRef();
  }

  componentDidMount() {
    if (this.canvas.current)
      this.setState({
        height: this.canvas.current.clientHeight,
        width: this.canvas.current.clientWidth,
      });
  }

  render() {
    const height = this.state.height - 10;
    const width = this.state.width;
    return (
      <div ref={this.canvas} style={{ width: 1080, height: 700 }}>
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
          <GeometryField
            field={this.props.field}
            width={width}
            height={height}
          />
        </Canvas>
      </div>
    );
  }
}
