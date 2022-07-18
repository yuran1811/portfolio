import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { MySelf } from './Models';

const App = () => {
  return (
    <div className="w-screen h-screen bg-zinc-900">
      <Canvas camera={{ position: [2, 0, 12.25], fov: 15, near: 2 }}>
        <ambientLight intensity={1.25} />
        <ambientLight intensity={0.1} />
        <directionalLight intensity={0.4} />

        <Suspense fallback={null}>
          <MySelf position={[0.025, -0.9, 1]} />
        </Suspense>

        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default App;
