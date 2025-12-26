import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Environment, Lightformer } from '@react-three/drei';
import * as THREE from 'three';

// Main organic blob with smooth liquid surface
const OrganicBlob = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      // Ultra-smooth infinite 360-degree rotation on vertical axis
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <Sphere 
      ref={meshRef} 
      args={[1, 256, 256]} 
      scale={[4.2, 5.8, 4.2]} 
      position={[3.5, 0, -1]}
    >
      <MeshDistortMaterial
        color="#6b21a8" // Deep purple base
        attach="material"
        distort={0.3} // Smooth organic distortion
        speed={1.5}
        roughness={0.05} // Very smooth surface
        metalness={0.95} // High metallic for glassy effect
        emissive="#7c3aed" // Violet glow
        emissiveIntensity={0.5}
        clearcoat={1} // Adds glossy layer
        clearcoatRoughness={0.1}
      />
    </Sphere>
  );
};

// Floating accent spheres in teal and green
const AccentSphere = ({ position, color, scale }: { position: [number, number, number], color: string, scale: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      // Gentle floating motion
      meshRef.current.position.y = position[1] + Math.sin(clock.getElapsedTime() * 0.8 + position[0]) * 0.15;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 64, 64]} position={position} scale={scale}>
      <meshPhysicalMaterial
        color={color}
        roughness={0.05}
        metalness={0.2}
        transmission={0.85} // Glassy transparent effect
        thickness={2}
        opacity={0.8}
        transparent
        emissive={color}
        emissiveIntensity={0.15}
      />
    </Sphere>
  );
};

const ThreeScene: React.FC = () => {
  return (
    <div className="w-full h-screen absolute inset-0 bg-black">
      <Canvas 
        camera={{ position: [0, 0, 11], fov: 50 }}
        gl={{ antialias: true, alpha: false }}
      >
        {/* Premium cinematic lighting setup */}
        <Environment background={false} resolution={256}>
          <Lightformer 
            intensity={8} 
            color="#ffffff" 
            position={[4, 6, -6]} 
            scale={[25, 40, 1]} 
            onUpdate={(self) => self.lookAt(0, 0, 0)} 
          />
          <Lightformer 
            intensity={5} 
            color="#a855f7" 
            position={[-6, 2, 4]} 
            scale={[20, 8, 1]} 
            onUpdate={(self) => self.lookAt(0, 0, 0)} 
          />
          <Lightformer 
            intensity={4} 
            color="#06b6d4" 
            position={[8, -2, 6]} 
            scale={[15, 15, 1]} 
            onUpdate={(self) => self.lookAt(0, 0, 0)} 
          />
        </Environment>

        {/* Soft ambient lighting */}
        <ambientLight intensity={0.2} />
        
        {/* Key lights for specular highlights */}
        <spotLight 
          position={[6, 8, 6]} 
          angle={0.3} 
          penumbra={1} 
          intensity={3} 
          color="#ffffff" 
          castShadow={false}
        />
        <pointLight position={[6, 0, 4]} intensity={2.5} color="#7c3aed" />
        <pointLight position={[-4, -2, 3]} intensity={1.8} color="#06b6d4" />

        {/* Main organic blob */}
        <OrganicBlob />
        
        {/* Faint floating accent spheres in teal and green */}
        <AccentSphere position={[1.5, -3.2, 1.5]} color="#14b8a6" scale={0.75} />
        <AccentSphere position={[5.8, 1.8, 0.5]} color="#10b981" scale={0.55} />
        <AccentSphere position={[2.5, 3.2, 1.2]} color="#06b6d4" scale={0.45} />
        
      </Canvas>
    </div>
  );
};

export default ThreeScene;