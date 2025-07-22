import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

// Example Ready Player Me avatar GLB URL (replace with dynamic if needed)
const AVATAR_URL = 'https://models.readyplayer.me/64e4e2e7e7e7e7e7e7e7e7e7.glb';

function AnimatedAvatar({ url }) {
    const group = useRef();
    const { scene } = useGLTF(url);

    // Simple orbit animation
    useFrame((state) => {
        if (group.current) {
            group.current.rotation.y += 0.005;
        }
    });

    return <primitive ref={group} object={scene} scale={1.5} />;
}

export default function AvatarThreeD() {
    return (
        <div style={{ width: '100vw', height: '100vh', background: '#222' }}>
            <Canvas camera={{ position: [0, 1.5, 3], fov: 50 }} shadows>
                <ambientLight intensity={0.7} />
                <directionalLight position={[5, 10, 7.5]} intensity={1} castShadow />
                <Suspense fallback={null}>
                    <AnimatedAvatar url={AVATAR_URL} />
                </Suspense>
                <OrbitControls enablePan={false} />
            </Canvas>
        </div>
    );
}

// Required for drei GLTF loader
useGLTF.preload(AVATAR_URL); 