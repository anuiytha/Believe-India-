import { Canvas } from "@react-three/fiber";
import { Experience } from "../components/experience";

const AvatarPage = () => {
    return (
        <Canvas shadows camera={{ position: [0, 2, 5], fov: 30 }}>
            <color attach="background" args={["#000000"]} />
            <Experience />
        </Canvas>
    )
}

export default AvatarPage;