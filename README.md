Tarea 02 (10 pts)
CI4321 (2024)
Realizar un desarrollo individual para comenzar su camino en OpenGL y WebGL.
Realizar un programa que muestre un triángulo
equilátero en pantalla con los colores rojo, verde y
azul; tal que cada vértice tenga un color asignado
y el fondo sea oscuro, pero no negro, como se
muestra en el ejemplo. Este programa debe
realizarse al menos con Three.js y OpenGL.
Opcionalmente lo puede realizar con otras APIs
por puntos extra.
Colores del ejemplo, en hexadecimal: 1b1e2b, ff0000, 00ff00, 0000ff
Valores relevantes para los vértices: -0.50, 0.50, 0.87
Consideraciones:
● Fecha tope de entrega: Lunes 7 de Octubre, 6:00 pm.
● Formato de nombre del repo: tarea_02_CARNET.git
● Enviar a: 10-87970@usb.ve con copia a depci-invitado2@usb.ve
● Asunto: [ci4321] Tarea 02
● Contenido del email:
○ Saludo con nombre y carnet.
○ Enlace a repositorio de GitHub.
○ Enlace a YouTube mostrando el funcionamiento de cada ejemplo; no
es necesario hablar si queda claro cada paso para correr.

● El repositorio debe contener un subdirectorio por cada API (Three, OpenGL, etc)
● Cada subdirectorio debe tener un README con:
○ Nombre, Carnet y API (sí, aunque sea obvio porque ajá)
○ Sistema operativo en el que se desarrolló
○ Lista de dependencias e instrucciones de cómo correrlo

Evaluación:
● Three.js (5pt)
○ 1pt estar en el video
○ 1pt clean code, legibilidad y comentarios relevantes
○ 3pt que corra y haga lo esperado
● OpenGL con C/C++ (5pt)
○ 1pt estar en el video
○ 1pt clean code, legibilidad y comentarios relevantes
○ 3pt que corra y haga lo esperado
● API extra (2pt) - completamente opcional
○ Debe correr y estar en el video. Todo o nada 😛

Algunas ideas en orden ascendente de dificultad tomando en consideración
verbosidad si deciden tomar el camino de los puntos extra:
● WebGL2
● Metal (macOS)
● DirectX 12 (Windows)
● Vulkan

Se recomiendan los siguientes recursos como puntos de partida:
● Three.js
https://threejs.org/docs/index.html#manual/en/introduction/Installation
● OpenGL
https://en.wikibooks.org/wiki/OpenGL_Programming/Modern_OpenGL_Introd
uction

Pueden utilizar cualquiera de las siguientes bibliotecas para el manejo de ventanas,
así como entrada y salida:
● Freeglut
https://freeglut.sourceforge.net/
● SDL
https://libsdl.org/
● GLFW
https://www.glfw.org/
