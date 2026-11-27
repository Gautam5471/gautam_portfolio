import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { ContactShadows, Float, RoundedBox, Environment, OrbitControls } from '@react-three/drei';

function Laptop() {
  return (
    <group position={[0, -0.35, 0]} rotation={[-0.08, -0.35, 0]}>
      {/* keyboard deck */}
      <RoundedBox args={[3.35, 0.13, 2.15]} radius={0.09} smoothness={4} position={[0, 0, 0]}>
        <meshStandardMaterial color="#202936" metalness={0.78} roughness={0.28} />
      </RoundedBox>
      <RoundedBox args={[3.05, 0.025, 1.82]} radius={0.06} smoothness={4} position={[0, 0.078, -0.04]}>
        <meshStandardMaterial color="#111925" metalness={0.35} roughness={0.5} />
      </RoundedBox>
      {/* trackpad */}
      <RoundedBox args={[0.9, 0.012, 0.55]} radius={0.04} smoothness={4} position={[0, 0.096, 0.58]}>
        <meshStandardMaterial color="#283547" metalness={0.45} roughness={0.4} />
      </RoundedBox>
      {/* screen */}
      <group position={[0, 0.12, -1.0]} rotation={[-0.12, 0, 0]}>
        <RoundedBox args={[3.35, 2.18, 0.12]} radius={0.09} smoothness={4} position={[0, 1.08, 0]}>
          <meshStandardMaterial color="#263344" metalness={0.8} roughness={0.22} />
        </RoundedBox>
        <RoundedBox args={[3.13, 1.96, 0.025]} radius={0.045} smoothness={4} position={[0, 1.08, 0.071]}>
          <meshStandardMaterial color="#080e18" emissive="#07172c" emissiveIntensity={0.55} roughness={0.3} />
        </RoundedBox>
        {/* abstract code lines on screen */}
        <group position={[-1.25, 1.76, 0.09]}>
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <mesh key={i} position={[0.5 + (i % 2) * 0.15, -i * 0.23, 0]}>
              <boxGeometry args={[1.0 + (i % 3) * 0.35, 0.035, 0.012]} />
              <meshBasicMaterial color={['#6ea8fe', '#8b7cf6', '#56c7b5'][i % 3]} />
            </mesh>
          ))}
          <mesh position={[-0.03, 0.08, 0]}>
            <boxGeometry args={[0.32, 0.045, 0.012]} />
            <meshBasicMaterial color="#d8e6ff" />
          </mesh>
        </group>
        <mesh position={[0, 0.06, 0.1]}>
          <sphereGeometry args={[0.035, 16, 16]} />
          <meshBasicMaterial color="#8baeff" />
        </mesh>
      </group>
    </group>
  );
}

function FloatingPanel({ position, rotation, color = '#7c9cff', width = 0.9 }) {
  return (
    <Float speed={1.35} rotationIntensity={0.18} floatIntensity={0.28}>
      <group position={position} rotation={rotation}>
        <RoundedBox args={[width, 0.58, 0.055]} radius={0.07} smoothness={4}>
          <meshStandardMaterial color="#111a29" metalness={0.5} roughness={0.3} transparent opacity={0.94} />
        </RoundedBox>
        <mesh position={[-width * 0.27, 0.12, 0.035]}>
          <boxGeometry args={[width * 0.24, 0.045, 0.012]} />
          <meshBasicMaterial color={color} />
        </mesh>
        <mesh position={[0.08, -0.04, 0.035]}>
          <boxGeometry args={[width * 0.55, 0.035, 0.012]} />
          <meshBasicMaterial color="#52647d" />
        </mesh>
        <mesh position={[-0.08, -0.18, 0.035]}>
          <boxGeometry args={[width * 0.36, 0.035, 0.012]} />
          <meshBasicMaterial color="#52647d" />
        </mesh>
      </group>
    </Float>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={1.15} />
      <directionalLight position={[4, 6, 5]} intensity={2.2} color="#dce8ff" />
      <pointLight position={[-4, 2, 2]} intensity={24} color="#477cff" distance={9} />
      <pointLight position={[4, 1, -3]} intensity={18} color="#8c72ff" distance={8} />
      <Float speed={0.8} rotationIntensity={0.08} floatIntensity={0.1}>
        <Laptop />
      </Float>
      <FloatingPanel position={[-2.25, 1.4, -0.4]} rotation={[0.05, 0.35, -0.08]} color="#73a7ff" />
      <FloatingPanel position={[2.15, 1.75, -0.8]} rotation={[0.05, -0.3, 0.08]} color="#a18aff" width={1.05} />
      <mesh position={[0, -0.5, -1.8]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[200, 200]} />
        <meshStandardMaterial color="#080c14" roughness={0.82} metalness={0.18} />
      </mesh>
      <ContactShadows position={[0, -0.49, 0]} opacity={0.45} scale={9} blur={2.8} far={3} />
      <Environment preset="city" />
      <OrbitControls enablePan={false} enableZoom={false} minPolarAngle={1.05} maxPolarAngle={1.8} />
    </>
  );
}

export default function Workspace3D() {
  return (
    <div className="scene-shell" aria-label="Interactive 3D laptop workspace">
      <Canvas camera={{ position: [0, 2.2, 7.2], fov: 38 }} dpr={[1, 1.7]}>
        <Suspense fallback={null}><Scene /></Suspense>
      </Canvas>
      <div className="scene-caption"><span className="live-dot" /> INTERACTIVE 3D WORKSPACE <span className="caption-divider">/</span> DRAG TO EXPLORE</div>
    </div>
  );
}
