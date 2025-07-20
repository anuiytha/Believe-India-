import AvatarModel from '../components/avatarModel';
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function AvatarPage() {
    return (
        <Canvas camera={{ position: [0, 1, 5], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[0, 5, 5]} intensity={1} />
            <Suspense fallback={null}>
                <AvatarModel position={[0, -1, 0]} />
            </Suspense>
            <OrbitControls />
        </Canvas>

    )
}

export default AvatarPage;