import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

function HolographicGlobe() {
  const group = useRef();

  const particles = useMemo(() => {
    const points = [];
    const count = 380;
    for (let index = 0; index < count; index += 1) {
      const phi = Math.acos(1 - (2 * (index + 0.5)) / count);
      const theta = Math.PI * (1 + Math.sqrt(5)) * index;
      const radius = 1.8 + Math.sin(index * 0.37) * 0.025;
      points.push([
        radius * Math.cos(theta) * Math.sin(phi),
        radius * Math.sin(theta) * Math.sin(phi),
        radius * Math.cos(phi)
      ]);
    }
    return points;
  }, []);

  useFrame(({ clock, pointer }) => {
    if (!group.current) return;
    group.current.rotation.y = clock.elapsedTime * 0.18 + pointer.x * 0.22;
    group.current.rotation.x = pointer.y * 0.15;
  });

  return (
    <group ref={group}>
      <mesh>
        <sphereGeometry args={[1.62, 64, 64]} />
        <meshStandardMaterial
          color="#00bfff"
          emissive="#00bfff"
          emissiveIntensity={0.18}
          transparent
          opacity={0.09}
          wireframe
        />
      </mesh>
      <mesh rotation={[Math.PI / 2.7, 0, 0]}>
        <torusGeometry args={[1.95, 0.01, 12, 160]} />
        <meshBasicMaterial color="#8A2BE2" transparent opacity={0.72} />
      </mesh>
      <mesh rotation={[0, Math.PI / 3.1, Math.PI / 2]}>
        <torusGeometry args={[2.08, 0.008, 12, 160]} />
        <meshBasicMaterial color="#00BFFF" transparent opacity={0.66} />
      </mesh>
      {particles.map((position, index) => (
        <mesh key={index} position={position}>
          <sphereGeometry args={[index % 17 === 0 ? 0.026 : 0.014, 8, 8]} />
          <meshBasicMaterial color={index % 3 === 0 ? "#8A2BE2" : "#C7F3FF"} transparent opacity={0.86} />
        </mesh>
      ))}
    </group>
  );
}

function FloatingPanels() {
  const group = useRef();
  const panels = [
    { position: [-2.75, 1.12, 0.25], label: "3D Web", color: "#00BFFF" },
    { position: [2.58, 0.78, -0.18], label: "SEO", color: "#8A2BE2" },
    { position: [1.96, -1.38, 0.28], label: "Apps", color: "#00BFFF" },
    { position: [-2.3, -1.12, -0.18], label: "UI/UX", color: "#8A2BE2" }
  ];

  useFrame(({ clock }) => {
    if (!group.current) return;
    group.current.children.forEach((child, index) => {
      if (!panels[index]) return;
      child.position.y = panels[index].position[1] + Math.sin(clock.elapsedTime * 1.2 + index) * 0.08;
      child.rotation.y = Math.sin(clock.elapsedTime * 0.8 + index) * 0.16;
      child.rotation.x = Math.cos(clock.elapsedTime * 0.7 + index) * 0.08;
    });
  });

  return (
    <group ref={group}>
      {panels.map((panel, index) => (
        <group key={panel.label} position={panel.position}>
          <mesh>
            <boxGeometry args={[1.08, 0.44, 0.055]} />
            <meshStandardMaterial color="#071126" emissive={panel.color} emissiveIntensity={0.18} transparent opacity={0.78} />
          </mesh>
          <mesh position={[-0.31, 0, 0.036]}>
            <boxGeometry args={[0.22 + index * 0.03, 0.045, 0.016]} />
            <meshBasicMaterial color={panel.color} transparent opacity={0.88} />
          </mesh>
          <mesh position={[0.18, 0.07, 0.04]}>
            <boxGeometry args={[0.44, 0.035, 0.016]} />
            <meshBasicMaterial color="#ffffff" transparent opacity={0.42} />
          </mesh>
          <mesh position={[0.24, -0.07, 0.04]}>
            <boxGeometry args={[0.34, 0.028, 0.016]} />
            <meshBasicMaterial color="#ffffff" transparent opacity={0.3} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function StarField() {
  const ref = useRef();
  const positions = useMemo(() => {
    const count = 2500;
    const array = new Float32Array(count * 3);
    for (let index = 0; index < count; index += 1) {
      array[index * 3] = (Math.random() - 0.5) * 35;
      array[index * 3 + 1] = (Math.random() - 0.5) * 20;
      array[index * 3 + 2] = (Math.random() - 0.5) * 15 - 5;
    }
    return array;
  }, []);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.y = clock.elapsedTime * 0.018;
    ref.current.rotation.x = Math.sin(clock.elapsedTime * 0.12) * 0.025;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.018} color="#C7F3FF" transparent opacity={0.72} sizeAttenuation />
    </points>
  );
}

function RotatingRig() {
  const ref = useRef();
  const { viewport } = useThree();
  
  // Responsive offset: Center on mobile, shift right on desktop
  const isMobile = viewport.width < 10;
  const offset = isMobile ? 0 : viewport.width * 0.35;

  useFrame(({ clock, pointer }) => {
    if (!ref.current) return;
    ref.current.rotation.y = pointer.x * 0.12 + Math.sin(clock.elapsedTime * 0.24) * 0.04;
    ref.current.rotation.x = pointer.y * 0.07;
  });

  return (
    <group ref={ref} position={[offset, 0, 0]}>
      <HolographicGlobe />
      <FloatingPanels />
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.72} />
      <pointLight position={[4, 4, 4]} color="#00BFFF" intensity={1} />
      <pointLight position={[-5, -2, 3]} color="#8A2BE2" intensity={1} />
      <StarField />
      <RotatingRig />
      <mesh position={[0, 0, -2.4]}>
        <planeGeometry args={[8, 8]} />
        <meshBasicMaterial
          color="#00bfff"
          transparent
          opacity={0.03}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </>
  );
}

const Hero3D = () => {
  return (
    <div className="absolute inset-0 h-full w-full">
      <Canvas camera={{ position: [0, 0, 6.6], fov: 42 }} dpr={[1, 1.7]}>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Hero3D;
