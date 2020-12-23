import React from "react";
import { BufferGeometry, Shape, Vector3 } from "three";

export interface GeometryProps {
  field: {
    size: { width: number; length: number };
  };
  height: number;
  width: number;
  scale : number;
}

export const GeometryField: React.FC<GeometryProps> = (
  props: GeometryProps
) => {
  const width = (props.field.size.width * 100) / 2;
  const length = (props.field.size.length * 100) / 2;

  const outerLine: Array<Vector3> = [
    new Vector3(-length, -width, 0),
    new Vector3(-length, width, 0),
    new Vector3(length, width, 0),
    new Vector3(length, -width, 0),
    new Vector3(-length, -width, 0),
  ];

  const lineVertical: Array<Vector3> = [
    new Vector3(-0, width, 0),
    new Vector3(-0, -width, 0),
  ];

  const centerCircle = new Shape();
  centerCircle.moveTo(0, 0);
  centerCircle.arc(0, 0, 50, 0, 2 * Math.PI, false);

  const points = centerCircle.getPoints();
  const geometryPoints = new BufferGeometry().setFromPoints(points);

  const penaltywidth = (2.0 * 100) / 2;
  const penaltydepth = 1.0 * 100;
  const rightPenalty: Array<Vector3> = [
    new Vector3(length, penaltywidth, 0),
    new Vector3(length - penaltydepth, penaltywidth, 0),
    new Vector3(length - penaltydepth, -penaltywidth, 0),
    new Vector3(length, -penaltywidth, 0),
  ];

  const leftPenalty: Array<Vector3> = [
    new Vector3(-length, penaltywidth, 0),
    new Vector3(-length + penaltydepth, penaltywidth, 0),
    new Vector3(-length + penaltydepth, -penaltywidth, 0),
    new Vector3(-length, -penaltywidth, 0),
  ];


  const goalwidth = (1.0 * 100) / 2;
  const goaldepth = 0.2 * 100;

  const goalLeft: Array<Vector3> = [
    new Vector3(-length, goalwidth, 0),
    new Vector3(-length - goaldepth, goalwidth, 0),
    new Vector3(-length - goaldepth, -goalwidth, 0),
    new Vector3(-length, -goalwidth, 0),

  ]

  const goalRight: Array<Vector3> = [
    new Vector3(length, goalwidth, 0),
    new Vector3(length + goaldepth, goalwidth, 0),
    new Vector3(length + goaldepth, -goalwidth, 0),
    new Vector3(length, -goalwidth, 0),
  ]

  return (
    <group>
      <line>
        <geometry vertices={outerLine}></geometry>
        <lineBasicMaterial
          attach="material"
          color={"#9c88ff"}
        ></lineBasicMaterial>
      </line>
      <line>
        <geometry vertices={lineVertical}></geometry>
        <lineBasicMaterial
          attach="material"
          color={"#9c88ff"}
        ></lineBasicMaterial>
      </line>
      <lineLoop geometry={geometryPoints}>
        <lineBasicMaterial
          attach="material"
          color={"#9c88ff"}
          linewidth={1}
        ></lineBasicMaterial>
      </lineLoop>
      <line>
        <geometry vertices={leftPenalty}></geometry>
        <lineBasicMaterial
          attach="material"
          color={"#9c88ff"}
        ></lineBasicMaterial>
      </line>
      <line>
        <geometry vertices={rightPenalty}></geometry>
        <lineBasicMaterial
          attach="material"
          color={"#9c88ff"}
        ></lineBasicMaterial>
      </line>
      <line>
        <geometry vertices={goalLeft}></geometry>
        <lineBasicMaterial
          attach="material"
          color={"#9c88ff"}
        ></lineBasicMaterial>
      </line>
      <line>
        <geometry vertices={goalRight}></geometry>
        <lineBasicMaterial
          attach="material"
          color={"#9c88ff"}
        ></lineBasicMaterial>
      </line>
    </group>
  );
};
