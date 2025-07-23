import { Canvas } from "@react-three/fiber";
import { Experience } from "../components/experience";

function App() {
    return (
        <Canvas camera={{ position: [0, 2, 5], fov: 30 }} style={{ width: '100vw', height: '100vh' }}>
            <color attach="background" args={["#ececec"]} />
            <Experience />
        </Canvas>
    );
}

export default App;
