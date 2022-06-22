import React from 'react';
import { MeshDistortMaterial, Sphere } from '@react-three/drei';

export default function AnimatedSphere() {
    return (
        <Sphere visible args={[1, 50, 100]} scale={2.8}>
            <MeshDistortMaterial
                color="#FBD3E9"
                attach="material"
                distort={0.4}
                speed={2}
                roughness={0.3}
            />
        </Sphere>
    );
}
