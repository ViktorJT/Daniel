import {
  Text,
  useCursor,
  useTexture,
  useVideoTexture,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";

const ThreeImage = ({ url }: { url: string }) => {
  const map = useTexture(url);
  return <meshBasicMaterial map={map} toneMapped={false} />;
};

const Video = ({ url }: { url: string }) => {
  const map = useVideoTexture(url, { loop: true });
  return <meshBasicMaterial map={map} toneMapped={false} />;
};

const Asset = (
  {
    router,
    slug,
    url,
    mimeType,
    boxWidth,
    boxHeight,
    aspectRatio,
    overlay = new THREE.Color(),
  }: any,
) => {
  const ref: any = useRef();

  const [hovered, setHovered] = useState(false);
  useCursor(hovered);

  const yOffset = boxHeight - boxWidth * aspectRatio.height;
  const xOffset = boxWidth - boxHeight * aspectRatio.width;
  const arHeight = boxWidth * aspectRatio.height;
  const isOverflowing = arHeight > boxHeight;

  const scale = isOverflowing
    ? new THREE.Vector3(boxHeight * aspectRatio.width, boxHeight, 1)
    : new THREE.Vector3(boxWidth, boxWidth * aspectRatio.height, 1);

  let position = isOverflowing
    ? new THREE.Vector3(-xOffset / 2, 0, 0)
    : new THREE.Vector3(0, yOffset / 2, 0);

  let asset: any = undefined;

  useFrame(() => {
    if (ref.current) {
      asset = asset ??
        ref.current.children.find(({ name }: any) => name === "asset");

      asset.material.color.lerp(
        overlay.set(hovered ? "darkgray" : "white"),
        hovered ? 1 : 0.05,
      );
    }
  }, 0.1);

  return (
    <group
      ref={ref}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => router.push(slug)}
    >
      {hovered
        ? (
          <Text
            // position={new THREE.Vector3(0, 0, 0)}
            fontSize={0.25}
            anchorX="center"
            lineHeight={1.5}
            anchorY="middle"
            textAlign="center"
            font="/fonts/PPNeueMontreal-Book.otf"
          >
            View project
          </Text>
        )
        : undefined}
      <mesh name="asset" ref={ref} scale={scale}>
        <planeGeometry args={[1, 1, 32, 32]} />
        {mimeType.startsWith("image")
          ? <ThreeImage url={url} />
          : <Video url={url} />}
      </mesh>
    </group>
  );
};

export default Asset;
