import { shaderMaterial, useScroll, useTexture } from "@react-three/drei";
import { extend, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

import type { Image } from "../../../pages/index";

interface AssetType extends Image {
  boxWidth: number;
  boxHeight: number;
}

const ShiftMaterial = shaderMaterial(
  {
    tex: null,
    hasTexture: 0,
    shift: 0,
    opacity: 1,
    color: new THREE.Color("white"),
  },
  `
    uniform float scale;
    uniform float shift;
    varying vec2 vUv;
    void main() {
      vec3 pos = position;
      pos.y = pos.y + ((sin(uv.x * 3.1415926535897932384626433832795) * shift * 2.0) * 0.125);
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.);
    }
  `,
  `  uniform sampler2D tex;
      uniform float hasTexture;
      uniform float shift;
      uniform float scale;
      uniform vec3 color;
      uniform float opacity;
      varying vec2 vUv;
      void main() {
        float angle = 0.0;
        vec2 p = (vUv - vec2(0.5, 0.5)) * (1.0 - scale) + vec2(0.5, 0.5);
        vec2 offset = 0.0 * vec2(cos(angle), sin(angle));
        vec4 cr = texture2D(tex, p + offset);
        vec4 cga = texture2D(tex, p);
        vec4 cb = texture2D(tex, p - offset);
        if (hasTexture == 1.0) gl_FragColor = vec4(cr.r, cga.g, cb.b, cga.a);
        else gl_FragColor = vec4(color, opacity);
      }
  `,
);

extend({ ShiftMaterial });


declare global {
  namespace JSX {
    interface IntrinsicElements {
     shiftMaterial: any;
    }
  }
}


const Asset = ({ src, boxWidth, boxHeight, aspectRatio }: AssetType) => {
  const img = useTexture(src);
  const material: any = useRef();
  const scroll = useScroll();

  // ! Find way to use isLandscape here

  const yOffset = boxHeight - boxWidth * aspectRatio.height;
  const xOffset = boxWidth - boxHeight * aspectRatio.width;
  const arHeight = boxWidth * aspectRatio.height;
  const isOverflowing = arHeight > boxHeight;

  const scale = isOverflowing
    ? new THREE.Vector3(boxHeight * aspectRatio.width, boxHeight, 1)
    : new THREE.Vector3(boxWidth, boxWidth * aspectRatio.height, 1);

  const position = isOverflowing
    ? new THREE.Vector3(-xOffset / 2, 0, 0)
    : new THREE.Vector3(0, yOffset / 2, 0);

  const factor = 20;

  let last = scroll.offset;

  useFrame(() => {
    if (material.current) {
      const shift = THREE.MathUtils.lerp(
        material.current.shift,
        (scroll.offset - last) * factor,
        1,
      );
      material.current.shift = shift;
      last = scroll.offset;
    }
  });

  return (
    <mesh scale={scale} position={position}>
      <planeGeometry args={[1, 1, 32, 32]} />
      <shiftMaterial
        ref={material}
        map={img}
      />
    </mesh>
  );
};

export default Asset;
