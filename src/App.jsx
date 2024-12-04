import { Canvas, useFrame } from "@react-three/fiber";
import {
  MeshReflectorMaterial,
  BakeShadows,
  Text,
} from "@react-three/drei";
import {
  EffectComposer,
  Bloom,
  DepthOfField,
} from "@react-three/postprocessing";
import { easing } from "maath";
import { Instances, Computers } from "./Computer";

export default function App() {
  return (
    <>
      <Canvas
        shadows
        dpr={[1, 1.5]}
        camera={{ position: [-1.5, 1, 5.5], fov: 45, near: 1, far: 20 }}
        eventSource={document.getElementById("root")}
        eventPrefix="client"
      >
        {/* Lights */}
        <color attach="background" args={["black"]} />
        <hemisphereLight intensity={0.15} groundColor="black" />
        <spotLight
          decay={0}
          position={[10, 20, 10]}
          angle={0.12}
          penumbra={1}
          intensity={1}
          castShadow
          shadow-mapSize={1024}
        />
        {/* Main scene */}
        <group position={[-0, -1, 0]}>
          {/* Auto-instanced sketchfab model */}
          <Instances>
            <Computers scale={0.5} />
          </Instances>
          {/* Plane reflections + distance blur */}
          <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[50, 50]} />
            <MeshReflectorMaterial
              blur={[300, 30]}
              resolution={2048}
              mixBlur={1}
              mixStrength={180}
              roughness={1}
              depthScale={1.2}
              minDepthThreshold={0.4}
              maxDepthThreshold={1.4}
              color="#202020"
              metalness={0.8}
            />
          </mesh>
          <pointLight
            distance={1.5}
            intensity={1}
            position={[-0.15, 0.7, 0]}
            color="orange"
          />
        </group>
        {/* Postprocessing */}
        <EffectComposer disableNormalPass>
          <Bloom
            luminanceThreshold={0}
            mipmapBlur
            luminanceSmoothing={0.0}
            intensity={5}
          />
          <DepthOfField
            target={[0, 0, 13]}
            focalLength={0.3}
            bokehScale={15}
            height={700}
          />
        </EffectComposer>
        {/* Camera movements */}
        <CameraRig />
        {/* Small helper that freezes the shadows for better performance */}
        <BakeShadows />

        {/* Camera-following text */}
        <CameraText />
      </Canvas>

      {/* Scrollable content below the canvas */}
      <div
        style={{
          height: '100vh',
          overflowY: 'auto',
          padding: '20px',
          backgroundColor: 'black',
          color: 'white',
        }}
      >
        <h1>Welcome to the Scrollable Page</h1>
        <p>
          This is a new section that you can scroll below the 3D scene.
          You can add more content here, like text, images, or other components.
        </p>
        <p>
          Scroll down to see more content. You can make this page as long as needed.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vulputate urna vel neque efficitur, vel viverra ante vulputate. Ut et velit sem. Nunc et ligula at purus euismod maximus et ut lectus.
        </p>
        <p>
          Curabitur malesuada massa et dui varius, non fermentum risus pretium. Ut sollicitudin hendrerit nisl sit amet rhoncus. In at sapien magna. Nulla facilisi.
        </p>
        <p>
          Continue scrolling for more content. You can add a variety of components and elements in this section!
        </p>
      </div>
    </>
  );
}

// Camera Rig for movement and looking at the center
function CameraRig() {
  useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [
        -1 + (state.pointer.x * state.viewport.width) / 3,
        (1 + state.pointer.y) / 2,
        5.5,
      ],
      0.5,
      delta
    );
    state.camera.lookAt(0, 0, 0);
  });
}

// Camera-following text component
function CameraText() {
  return (
    <>
      {/* Main Text */}
      <Text
        position={[0, 0.5, 1.8]} // Adjust Z-axis for closeness
        fontSize={0.5} // Font size of main text
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        Danish As-Salafy Rachman
      </Text>

      {/* Additional Text */}
      <Text
        position={[0, 0.1, 1.8]} // Slightly below the main text
        fontSize={0.2} // Smaller font size for subtext
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        A creative Front-end developer and website designer
      </Text>
    </>
  );
}
