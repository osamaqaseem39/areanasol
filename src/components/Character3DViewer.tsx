"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export function Character3DViewer({ modelPath }: { modelPath: string }) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true // Enable alpha channel for transparency
    });
    
    renderer.setSize(800, 1000); // Match container dimensions
    renderer.setClearColor(0x000000, 0); // Transparent background
    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Add a point light for better character illumination
    const pointLight = new THREE.PointLight(0xffffff, 0.5);
    pointLight.position.set(0, 10, 0);
    scene.add(pointLight);

                                                                                                                       // Universal mobile settings
        const isMobile = window.innerWidth < 768;
        const cameraZ = isMobile ? 5 : 6;
        const cameraY = isMobile ? 0.5 : 0; // Center camera vertically
        const characterScale = isMobile ? 1.5 : 2.5;
        const orbitalRadius = isMobile ? 1 : 2;

     // Camera position
     camera.position.z = cameraZ;
     camera.position.y = cameraY;
     camera.position.x = 0;

     // Load the 3D models
     const loader = new GLTFLoader();
     const models: THREE.Group[] = [];
    
         // Load character1 model (left side)
     loader.load(
       "/images/3dcharaters/character1/Pbr/base_basic_pbr.glb",
       (gltf) => {
         console.log("Character1 model loaded successfully");
         const model = gltf.scene;
         
         // Center the model
         const box = new THREE.Box3().setFromObject(model);
         const center = box.getCenter(new THREE.Vector3());
         model.position.sub(center);
         
         // Scale the model to fit nicely
         const size = box.getSize(new THREE.Vector3());
         const maxDim = Math.max(size.x, size.y, size.z);
         const scale = characterScale / maxDim;
         model.scale.setScalar(scale);
        
                                                                       // Position character1 on the left side
           model.position.x = -2;
           model.position.z = 0;
           model.position.y = -0.5; // Bring characters a bit lower
        scene.add(model);
        models.push(model);
        
        // Store models for animation
        scene.userData.models = models;
      },
      (progress) => {
        console.log("Character1 loading progress:", (progress.loaded / progress.total * 100) + "%");
      },
      (error) => {
        console.error("Error loading character1 model:", error);
      }
    );
    
                   // Load character2 model (right side)
      loader.load(
        "/images/3dcharaters/character2/Pbr/base_basic_pbr.glb",
        (gltf) => {
          console.log("Character2 model loaded successfully");
          const model = gltf.scene;
          
          // Center the model
          const box = new THREE.Box3().setFromObject(model);
          const center = box.getCenter(new THREE.Vector3());
          model.position.sub(center);
          
          // Scale the model to fit nicely
          const size = box.getSize(new THREE.Vector3());
          const maxDim = Math.max(size.x, size.y, size.z);
          const scale = characterScale / maxDim;
          model.scale.setScalar(scale);
        
                                                                       // Position character2 on the right side
           model.position.x = 2;
           model.position.z = 0;
           model.position.y = -0.5; // Bring characters a bit lower
        scene.add(model);
        models.push(model);
        
        // Update stored models for animation
        scene.userData.models = models;
      },
      (progress) => {
        console.log("Character2 loading progress:", (progress.loaded / progress.total * 100) + "%");
      },
      (error) => {
        console.error("Error loading character2 model:", error);
      }
    );
    
                   // Load character3 model (front side)
      loader.load(
        "/images/3dcharaters/character3/Pbr/base_basic_pbr.glb",
        (gltf) => {
          console.log("Character3 model loaded successfully");
          const model = gltf.scene;
          
          // Center the model
          const box = new THREE.Box3().setFromObject(model);
          const center = box.getCenter(new THREE.Vector3());
          model.position.sub(center);
          
          // Scale the model to fit nicely
          const size = box.getSize(new THREE.Vector3());
          const maxDim = Math.max(size.x, size.y, size.z);
          const scale = characterScale / maxDim;
          model.scale.setScalar(scale);
        
                                                                       // Position character3 in front
           model.position.x = 0;
           model.position.z = -2;
           model.position.y = -0.5; // Bring characters a bit lower
        scene.add(model);
        models.push(model);
        
        // Update stored models for animation
        scene.userData.models = models;
      },
      (progress) => {
        console.log("Character3 loading progress:", (progress.loaded / progress.total * 100) + "%");
      },
      (error) => {
        console.error("Error loading character3 model:", error);
      }
    );
    
                   // Load character4 model (back side)
      loader.load(
        "/images/3dcharaters/character4/Pbr/base_basic_pbr.glb",
        (gltf) => {
          console.log("Character4 model loaded successfully");
          const model = gltf.scene;
          
          // Center the model
          const box = new THREE.Box3().setFromObject(model);
          const center = box.getCenter(new THREE.Vector3());
          model.position.sub(center);
          
          // Scale the model to fit nicely
          const size = box.getSize(new THREE.Vector3());
          const maxDim = Math.max(size.x, size.y, size.z);
          const scale = characterScale / maxDim;
          model.scale.setScalar(scale);
        
                                                                       // Position character4 in back
           model.position.x = 0;
           model.position.z = 2;
           model.position.y = -0.5; // Bring characters a bit lower
        scene.add(model);
        models.push(model);
        
        // Update stored models for animation
        scene.userData.models = models;
      },
      (progress) => {
        console.log("Character4 loading progress:", (progress.loaded / progress.total * 100) + "%");
      },
      (error) => {
        console.error("Error loading character4 model:", error);
      }
    );

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Rotate all models around Y axis and revolve around center
      if (scene.userData.models) {
        (scene.userData.models as THREE.Group[]).forEach((model: THREE.Group, index: number) => {
          // Individual rotation
          model.rotation.y += 0.01;
          
                                           // Orbital revolution
            const time = Date.now() * 0.001;
            const radius = orbitalRadius;
            const speed = 0.5;
          const angle = (index * Math.PI / 2) + (time * speed); // 0°, 90°, 180°, 270°
          model.position.x = Math.cos(angle) * radius;
          model.position.z = Math.sin(angle) * radius;
        });
      }
      
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [modelPath]);

  return (
    <div style={{ 
      width: 800, // Increased to prevent left side cutoff
      height: 1000, // Increased from 1000 to 1200 for more height
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: "none",
      outline: "none",
      boxShadow: "none",
      overflow: "visible",
      padding: 0,
      margin: 0
    }}>
      <div ref={mountRef} style={{ 
        width: 800, // Match renderer width
        height: 1000, // Increased from 1000 to 1200 to match container
        border: "none",
        outline: "none",
        boxShadow: "none",
        overflow: "visible",
        padding: 0,
        margin: 0
      }} />
    </div>
  );
} 