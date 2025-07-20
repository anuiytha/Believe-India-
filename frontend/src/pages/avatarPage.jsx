import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import AvatarModel from '../components/avatarModel';

function AvatarPage() {
    return (
        <div style={{ width: '100%', height: '100vh' }}>
            <Canvas
                camera={{ position: [0, 1, 5], fov: 50 }}
                gl={{ preserveDrawingBuffer: true }}
            >
                {/* Lighting setup */}
                <ambientLight intensity={0.5} />
                <directionalLight position={[0, 5, 5]} intensity={1} />

                {/* Avatar loading with graceful fallback */}
                <Suspense fallback={<span style={{ color: '#fff' }}>Loading avatar...</span>}>
                    <AvatarModel position={[0, -1, 0]} />
                </Suspense>

                {/* User interaction */}
                <OrbitControls />
            </Canvas>
        </div>
    );
}

export default AvatarPage;
