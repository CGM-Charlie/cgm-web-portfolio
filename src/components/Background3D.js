import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import AnimatedSphere from './3D/AnimatedSphere.js';

export default function Background3D() {
    return (
        <>
            <Canvas>
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={0.5} />
                <directionalLight position={[-2, 5, 2]} intensity={0.5} />
                <Suspense fallback={null}>
                    <AnimatedSphere />
                </Suspense>
            </Canvas>
        </>
    );
}
