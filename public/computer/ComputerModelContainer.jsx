import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { ComputerModel } from "./ComputerModel";
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";

function ComputerModelContainer() {
    return (
        <Canvas>
            <Suspense fallback="Loading...">
                <Stage environment={"night"} intensity={0.8}>
                    <ComputerModel />
                </Stage>
                <OrbitControls enableZoom={false} autoRotate />
                <PerspectiveCamera makeDefault position={[-1, 0, 1.8]} zoom={0.5}/>
            </Suspense>
        </Canvas>
    );
}

export default ComputerModelContainer;
