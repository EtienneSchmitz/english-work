import React from "react";
import { useThree } from "react-three-fiber";

export interface BallProps {
  ball: {
    position: {
      x: number;
      y: number;
    };
    radius: number;
  };
  scale: number;
}

export const Ball: React.FC<BallProps> = (props: BallProps) => {
  return (
    <group>
      <mesh
        name="ball"
        position={[
          props.ball.position.x * props.scale,
          props.ball.position.y * props.scale,
          0,
        ]}
      >
        <circleGeometry
          attach="geometry"
          args={[props.ball.radius * props.scale * 2, 32]}
        ></circleGeometry>
        <meshBasicMaterial
          color="#fca503"
          attach="material"
        ></meshBasicMaterial>
      </mesh>
    </group>
  );
};
