import * as THREE from "three";
import { Effects, useScroll } from "@react-three/drei";
import { WaterPass } from "./three/WaterPass";
import { extend, useFrame } from "@react-three/fiber";
import { useRef } from "react";

extend({ WaterPass });

declare global {
  namespace JSX {
    interface IntrinsicElements {
     waterPass: any;
    }
  }
}

const EffectsPass = () => {
  const water = useRef<any>();
  const scroll = useScroll();

  let last = scroll.offset;

  // Add bloom here when scrolling?

  useFrame(() => {
    if (water.current) {
      water.current.factor = THREE.MathUtils.lerp(
        water.current.factor,
        Math.abs(scroll.offset - last) * 300,
        0.1,
      );
    }

    last = scroll.offset;
  }, 0.1);

  return (
    <Effects disableGamma>
      <waterPass ref={water} />
    </Effects>
  );
};

export default EffectsPass;
