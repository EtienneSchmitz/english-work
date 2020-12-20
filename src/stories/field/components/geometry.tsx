import React from "react";

export interface GeometryProps {
  field: {
    size: { width: number; height: number };
  };
}

export const GeometryField: React.FC<GeometryProps> = (
  props: GeometryProps
) => (<h1>Test</h1>);
