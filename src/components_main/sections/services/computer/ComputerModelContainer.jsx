import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { ComputerModel } from "./ComputerModel";
import {
  OrbitControls,
  PerspectiveCamera,
  Stage,
  Html,
  Environment,
} from "@react-three/drei";

// Available environments: "night", "city", "forest", "park", "sunset"
const currentEnvironment = "forest";

function ComputerModelContainer() {
  return (
    <Canvas>
      <Suspense fallback={<Html center>Loading...</Html>}>
        <Stage environment={null} intensity={0.8}>
          <ComputerModel />
        </Stage>
        <Environment files={`/assets/environment/${currentEnvironment}.hdr`} />
        <OrbitControls enableZoom={false} autoRotate />
        <PerspectiveCamera makeDefault position={[-1, 0, 1.8]} zoom={0.5} />
      </Suspense>
    </Canvas>
  );
}

export default ComputerModelContainer;
