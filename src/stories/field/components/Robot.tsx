import React from "react";
import { Font, Shape } from "three";
import jsonFont from "three/examples/fonts/helvetiker_regular.typeface.json";

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
    props.radius * 1.25, // TODO : Search this
    -props.robot.position.theta + 0.75, // Search this
    -props.robot.position.theta - 0.75, // Search this
    false
  );

  const text = props.robot.id.toString();
  const textShape = new Font(jsonFont).generateShapes(text, 0.13);

  return (
    <group>
      <mesh
        name="ball"
        position={[props.robot.position.x, props.robot.position.y, 0]}
      >
        <shapeGeometry attach="geometry" args={[shape]}></shapeGeometry>
        <meshBasicMaterial
          color={props.color}
          attach="material"
        ></meshBasicMaterial>
      </mesh>
      <mesh position={[props.robot.position.x - 0.055, props.robot.position.y - 0.055, 0]}>
        <shapeBufferGeometry args={[textShape]}></shapeBufferGeometry>
        <meshBasicMaterial color="gray" attach="material"></meshBasicMaterial>
      </mesh>
    </group>
  );
};
