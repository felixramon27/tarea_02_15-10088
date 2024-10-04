import * as THREE from 'three';

// Crear la escena
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x1b1e2b);  // Fondo oscuro pero no negro

// Crear la cámara
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Configurar el renderizador
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Definir la geometría del triángulo equilátero
const geometry = new THREE.BufferGeometry();

// Los vértices del triángulo
const vertices = new Float32Array([
    -0.50, 0.50, 0.0,  // Vértice 1
    0.50, 0.50, 0.0,   // Vértice 2
    0.0, 0.87, 0.0     // Vértice 3
]);

// Asignar colores a los vértices (rojo, verde y azul)
const colors = new Float32Array([
    0, 1, 0,  // Vértice 2 en verde (G)
    0, 0, 1,  // Vértice 3 en azul (B)
    1, 0, 0,  // Vértice 1 en rojo (R)
]);

// Añadir los atributos de posición y color a la geometría
geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

// Crear el material con la propiedad de usar los colores del vértice
const material = new THREE.MeshBasicMaterial({ vertexColors: true });

// Crear la malla del triángulo
const triangle = new THREE.Mesh(geometry, material);
scene.add(triangle);

// Posicionar la cámara
camera.position.z = 2;

// Animación y renderizado
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

// Iniciar la animación
animate();
