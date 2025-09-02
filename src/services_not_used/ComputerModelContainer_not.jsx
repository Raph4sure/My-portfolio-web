import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { ComputerModel } from '../components_main/sections/services/computer/ComputerModel'
import { OrbitControls } from '@react-three/drei'


function ComputerModelContainer() {
    return (
        <Canvas>
            <Suspense fallback='Loading...'>
                <ComputerModel />
                <OrbitControls enableZoom={false} />
            </Suspense>
      </Canvas>
    )
}

export default ComputerModelContainer
