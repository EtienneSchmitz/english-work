import React from "react";

export interface BallProps {
  ball: {
    position: {
      x: number;
      y: number;
    };
    radius: number;
  };
}

export const Ball: React.FC<BallProps> = (props: BallProps) => {
  return (
    <group>
      <mesh
        name="ball"
        position={[
          props.ball.position.x,
          props.ball.position.y,
          0,
        ]}
      >
        <circleGeometry
          attach="geometry"
          args={[props.ball.radius * 2.2, 32]}
        ></circleGeometry>
        <meshBasicMaterial
          color="#fca503"
          attach="material"
        ></meshBasicMaterial>
      </mesh>
    </group>
  );
};
