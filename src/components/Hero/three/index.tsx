import { Box } from "@react-three/flex";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
import {
  Line,
  Text,
  useCursor,
  useTexture,
  useVideoTexture,
} from "@react-three/drei";
import { useRef, useState } from "react";

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
    overlay = new THREE.Color(),
    screenRight,
    backOfTheLine,
    initialPosition,
    url,
    mimeType,
    boxWidth,
    boxHeight,
    aspectRatio,
    title,
    slug,
    router
  }: any,
) => {
  const ref: any = useRef();
  
  const [hovered, setHovered] = useState(false);
  useCursor(hovered);

  const xOffset = boxWidth - boxHeight * aspectRatio.width;
  const arHeight = boxWidth * aspectRatio.height;
  const isOverflowing = arHeight > boxHeight;

  if (isOverflowing) {
    initialPosition.x = -xOffset / 2;
  }

  const scale = isOverflowing
    ? new THREE.Vector3(boxHeight * aspectRatio.width, boxHeight, 1)
    : new THREE.Vector3(boxWidth, boxWidth * aspectRatio.height, 1);

  let asset: any = undefined;

  useFrame((_, delta) => {
    if (ref.current) {
      asset = asset ??
        ref.current.children.find(({ name }: any) => name === "asset");

      asset.material.color.lerp(
        overlay.set(hovered ? "darkgray" : "white"),
        hovered ? 1 : 0.05,
      );

      ref.current.position.x += delta;
      if (ref.current.position.x > screenRight) {
        ref.current.position.x = backOfTheLine;
      }
    }
  }, 0.1);

  return (
    <group
      ref={ref}
      position={initialPosition}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => router.push(slug)}
    >
      {hovered
        ? (
          <group>
            <Text
              maxWidth={boxWidth}
              position={new THREE.Vector3(0, 0.1, 0)}
              fontSize={0.1}
              anchorX="center"
              lineHeight={1.5}
              anchorY="bottom"
              textAlign="center"
              font="/fonts/PPNeueMontreal-Bold.otf"
            >
              {title}
            </Text>
            <Line
              points={[
                new THREE.Vector3(-0.25, 0, 0),
                new THREE.Vector3(0.25, 0, 0),
              ]}
              color="white"
            />
            <Text
              position={new THREE.Vector3(0, -0.1, 0)}
              fontSize={0.1}
              anchorX="center"
              lineHeight={1.5}
              anchorY="top"
              textAlign="center"
              font="/fonts/PPNeueMontreal-Book.otf"
            >
              View project
            </Text>
          </group>
        )
        : undefined}
      <mesh name="asset" scale={scale}>
        <planeGeometry args={[1, 1, 32, 32]} />
        {mimeType.startsWith("image")
          ? <ThreeImage url={url} />
          : <Video url={url} />}
      </mesh>
    </group>
  );
};

const Hero = ({ router, heading, theme, featured }: any) => {
  const { viewport } = useThree();

  const color = theme === "dark" ? new THREE.Color("#FFF6E5") : new THREE.Color("#131313");

  const itemsOnScreen = 3;
  const margin = (viewport.width / 100) * 5;
  const assetWidth = viewport.width / itemsOnScreen;

  const screenLeft = -viewport.width / 2 + margin;
  const screenRight = viewport.width - assetWidth;
  const backOfTheLine = -(featured.length - (itemsOnScreen - 1)) * assetWidth;

  return (
    <Box
      height={viewport.height}
      width={viewport.width}
      dir="row"
      centerAnchor
    >
      {(_, boxHeight) => (
        <>
          <Text
            maxWidth={viewport.width / 2}
            color={color}
            fontSize={0.335}
            letterSpacing={0.0085}
            anchorX="left"
            lineHeight={1.5}
            anchorY="middle"
            textAlign="left"
            position={new THREE.Vector3(screenLeft, 0, 0)}
            font="/fonts/PPNeueMontreal-Book.otf"
          >
            {heading}
          </Text>
          {featured.map(({ id, ...asset }: any, i: number) => {
            const staggerX = -i * assetWidth + assetWidth;
            const initialPosition = new THREE.Vector3(staggerX, 0, 0);

            return (
              <Asset
                router={router}
                screenRight={screenRight}
                backOfTheLine={backOfTheLine}
                boxWidth={assetWidth}
                boxHeight={boxHeight}
                key={`hero-${i}-${id}`}
                initialPosition={initialPosition}
                {...asset}
              />
            );
          })}
        </>
      )}
    </Box>
  );
};

export default Hero;
