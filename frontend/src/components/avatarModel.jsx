import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function AvatarModel(props) {
    const group = useRef();
    const { nodes, materials } = useGLTF('https://models.readyplayer.me/687c4f9578fa5eac6bfdb72e.glb');

    return (
        <group ref={group} {...props} dispose={null}>
            <primitive object={nodes.Hips} />
            <skinnedMesh geometry={nodes.Body.geometry} material={materials.Body} skeleton={nodes.Body.skeleton} />
            {/* Add other parts like Hair, Outfit, etc. */}
        </group>
    );
}

useGLTF.preload('/avatar.glb');
