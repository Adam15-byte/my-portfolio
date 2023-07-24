import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useRef } from "react";

const CameraRig = ({ children }) => {
  const group = useRef();

  // model rotation
  useFrame((state, delta) => {
    const isMobile = window.innerWidth < 600;
    const isMid = window.innerWidth < 1200;
    // initial position
    let targetPosition = [0, 0, 5];

    if (isMobile) {
      targetPosition = [0, 0, 8];
    } else if (isMid) {
      targetPosition = [0, 0, 6];
    } else {
      targetPosition = [0, 0, 4];
    }

    // set model camera position
    easing.damp3(state.camera.position, targetPosition, 0.25, delta);

    easing.dampE(
      group.current.rotation,
      [state.pointer.y / 2, -state.pointer.x / 2, 0],
      0.5,
      delta
    );
  });

  return <group ref={group}>{children}</group>;
};

export default CameraRig;
