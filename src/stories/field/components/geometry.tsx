import React from "react";
import { Vector3 } from "three";

export interface GeometryProps {
  field: {
    size: { width: number; length: number };
  };
  height: number;
  width: number;
}

export const GeometryField: React.FC<GeometryProps> = (
  props: GeometryProps
) => {
  const width = (props.field.size.width * 100) / 2;
  const length = (props.field.size.length * 100) / 2;
  
  const points = [];
  
  points.push(new Vector3(-length, -width, 0));
  points.push(new Vector3(-length, width, 0));
  points.push(new Vector3(length, width, 0));
  points.push(new Vector3(length, -width, 0));
  points.push(new Vector3(-length, -width, 0));

  return (
      <line>
        <geometry vertices={points}></geometry>
        <lineBasicMaterial
          attach="material"
          color={"#9c88ff"}
        ></lineBasicMaterial>
      </line>
      
  );
};
