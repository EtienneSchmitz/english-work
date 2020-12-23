import React from "react";
import { Shape } from "three";

export interface RobotProps {
  robot: {
    id: number;
    position: {
      x: number;
      y: number;
      theta: number;
    };
  };
  radius: number;
  color: string;
}

export const Robot: React.FC<RobotProps> = (props: RobotProps) => {
  const shape = new Shape();
  shape.absarc(
    0,
    0,
    0.09 * 1.25, // TODO : Search this
    -props.robot.position.theta + 0.75, // Search this
    -props.robot.position.theta - 0.75, // Search this
    false
  );

  return (
    <group>
      <mesh
        name="ball"
        position={[
          props.robot.position.x,
          props.robot.position.y,
          0,
        ]}
      >
        <shapeGeometry attach="geometry" args={[shape]}></shapeGeometry>
        <meshBasicMaterial
          color={props.color}
          attach="material"
        ></meshBasicMaterial>
      </mesh>
    </group>
  );
};
