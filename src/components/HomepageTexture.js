import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
// import "tailwindcss/tailwind.css";

const HomePageTexture = () => {
  const mountRef = useRef(null);
  const [code, setCode] = useState(["", "", "", "", "", ""]);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.Camera();
    camera.position.z = 1;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(2, 2);
    const material = new THREE.ShaderMaterial({
      vertexShader: `void main() { gl_Position = vec4(position, 1.0); }`,
      fragmentShader: `void main() { gl_FragColor = vec4(0.0, 1.0, 0.0, 1.0); }`,
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div ref={mountRef} className="absolute top-0 left-0 w-full h-full -z-10" />
      
      <header className="absolute top-0 left-0 w-4/5 mx-auto p-5 flex justify-between items-center z-10">
        <img src="/assets/images/header-logo.png" alt="Integrity Logo" className="h-9" />
        <button className="bg-white text-black rounded-full px-6 py-2 text-sm font-medium hover:bg-opacity-90">
          Ask an Invitation
        </button>
      </header>

      <div className="flex flex-col items-center justify-center h-screen text-white text-center">
        <img src="/assets/images/center-logo.png" alt="Integrity Symbol" className="w-20 h-20 mb-5 drop-shadow-lg" />
        <h1 className="text-4xl font-semibold">Discover</h1>
        <p className="text-lg text-gray-400 max-w-md mt-3">
          The World's First On-Chain Bitcoin Backed Reward Protocol for Web3 Enterprises
        </p>
        
        <div className="flex gap-2 mt-5">
          {code.map((char, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              className="w-10 h-10 text-center text-lg border border-green-400 bg-transparent focus:ring-2 focus:ring-green-500"
              value={char}
              onChange={(e) => {
                const newCode = [...code];
                newCode[index] = e.target.value;
                setCode(newCode);
              }}
            />
          ))}
        </div>
        
        <button className="mt-4 px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition">
          Enter your invitation code →
        </button>
      </div>
    </div>
  );
};

export default HomePageTexture;
