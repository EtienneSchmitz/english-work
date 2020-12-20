import React from "react";
import { GeometryField } from "./components/geometry";

export interface FieldProps {
  field: {
    size: { width: number; height: number };
  };
}

export interface FieldState {}

export class Field extends React.Component<FieldProps, FieldState> {
  render() {
    return <GeometryField field={ this.props.field}/>
  }
}
