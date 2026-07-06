"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const geometries = [
      new THREE.IcosahedronGeometry(0.4, 0),
      new THREE.OctahedronGeometry(0.35, 0),
      new THREE.TorusGeometry(0.3, 0.1, 16, 32),
      new THREE.DodecahedronGeometry(0.25, 0),
      new THREE.TorusKnotGeometry(0.2, 0.08, 64, 8),
    ];

    const colors = [
      new THREE.Color("#d4af37"),
      new THREE.Color("#003366"),
      new THREE.Color("#f0d68a"),
      new THREE.Color("#1e5f74"),
      new THREE.Color("#2e8b57"),
    ];

    const meshes: THREE.Mesh[] = [];

    const positions = [
      { x: -1.5, y: 0.5, z: -1 },
      { x: 1.8, y: -0.5, z: -0.5 },
      { x: -0.5, y: -1.2, z: -2 },
      { x: 1.2, y: 1.3, z: -1.5 },
      { x: 0, y: 0, z: -3 },
    ];

    positions.forEach((pos, i) => {
      const geometry = geometries[i % geometries.length];
      const material = new THREE.MeshPhysicalMaterial({
        color: colors[i % colors.length],
        metalness: 0.3,
        roughness: 0.4,
        transparent: true,
        opacity: 0.15,
        wireframe: false,
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(pos.x, pos.y, pos.z);
      mesh.scale.set(1, 1, 1);
      group.add(mesh);
      meshes.push(mesh);
    });

    const wireframeMeshes: THREE.Mesh[] = [];
    positions.forEach((pos, i) => {
      const geometry = geometries[i % geometries.length].clone();
      const material = new THREE.MeshBasicMaterial({
        color: colors[i % colors.length],
        wireframe: true,
        transparent: true,
        opacity: 0.05,
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(pos.x, pos.y, pos.z);
      mesh.scale.set(1.2, 1.2, 1.2);
      group.add(mesh);
      wireframeMeshes.push(mesh);
    });

    camera.position.z = 5;

    const mouse = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = (event.clientX / width) * 2 - 1;
      mouse.y = -(event.clientY / height) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    const animate = () => {
      requestAnimationFrame(animate);

      target.x += (mouse.x - target.x) * 0.02;
      target.y += (mouse.y - target.y) * 0.02;

      group.rotation.x = target.y * 0.3;
      group.rotation.y = target.x * 0.3;

      meshes.forEach((mesh, i) => {
        mesh.rotation.x += 0.002 * (i + 1);
        mesh.rotation.y += 0.003 * (i + 1);
        const scale = 1 + Math.sin(Date.now() * 0.001 + i) * 0.1;
        mesh.scale.set(scale, scale, scale);
      });

      wireframeMeshes.forEach((mesh, i) => {
        mesh.rotation.x -= 0.001 * (i + 1);
        mesh.rotation.y -= 0.002 * (i + 1);
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      geometries.forEach((g) => g.dispose());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0"
      style={{ pointerEvents: "none" }}
    />
  );
}
