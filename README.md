# Tarea 02 - Triángulo Equilátero con Colores  
**Curso:** CI4321 (2024)  
**Puntuación Total:** 10 puntos   
**Alumno:** Felix Arnos   
**Carnet:** 15-10088   
**Fecha:** 2024-02-20   

## Descripción de la Tarea
El objetivo de esta tarea es desarrollar un programa de manera **individual** para iniciarse en **OpenGL** y **WebGL**. El programa debe mostrar un **triángulo equilátero** en pantalla con los colores **rojo**, **verde**, y **azul**, asignando un color a cada vértice. El fondo debe ser oscuro, pero no negro, con un color como el que se muestra en el ejemplo.

### Requisitos del Triángulo:
- **Colores de los vértices:**  
  - Rojo: `#ff0000`  
  - Verde: `#00ff00`  
  - Azul: `#0000ff`
- **Color de fondo:** `#1b1e2b`
- **Coordenadas de los vértices:** `(-0.50, 0.50, 0.87)`

### APIs a Utilizar:
El desarrollo debe realizarse con **Three.js** y **OpenGL**. También es opcional el uso de otras APIs para obtener puntos extra.

### Evaluación:
1. **Three.js** (5 pts):
   - **1 pt** por estar presente en el video.
   - **1 pt** por un código limpio y bien comentado.
   - **3 pts** por la correcta ejecución y funcionalidad del programa.
  
2. **OpenGL con C/C++** (5 pts):
   - **1 pt** por estar presente en el video.
   - **1 pt** por un código limpio y bien comentado.
   - **3 pts** por la correcta ejecución y funcionalidad del programa.

3. **API extra (opcional, 2 pts)**:
   - La API debe ejecutarse correctamente y aparecer en el video. Es todo o nada.

## Consideraciones
- **Fecha tope de entrega:** Lunes, 7 de Octubre, a las 6:00 pm.
- **Formato del repositorio GitHub:** `tarea_02_CARNET.git`
- **Envío por correo electrónico a:**  
  - 10-87970@usb.ve  
  - Con copia a: depci-invitado2@usb.ve
- **Asunto del correo:** `[ci4321] Tarea 02`
- **Contenido del correo:**
  - Saludo con tu **nombre** y **carnet**.
  - Enlace al **repositorio GitHub**.
  - Enlace a un **video en YouTube** mostrando el funcionamiento del programa. No es necesario hablar si el video muestra claramente cómo correr el programa.

## Estructura del Repositorio
- El repositorio debe contener un subdirectorio para cada API utilizada (**Three.js**, **OpenGL**, etc.).
- Cada subdirectorio debe incluir un archivo `README.md` que contenga la siguiente información:
  - **Nombre, Carnet y API utilizada.**
  - **Sistema operativo** en el que se desarrolló el proyecto.
  - **Lista de dependencias** e instrucciones para ejecutar el programa.

## APIs Extra (opcional)
Para puntos adicionales, se pueden utilizar otras APIs en lugar de Three.js u OpenGL. Algunas sugerencias en orden creciente de dificultad incluyen:
- **WebGL2**
- **Metal** (macOS)
- **DirectX 12** (Windows)
- **Vulkan**

## Recursos Recomendados
### Para empezar con Three.js:
- [Three.js - Documentación Oficial](https://threejs.org/docs/index.html#manual/en/introduction/Installation)

### Para empezar con OpenGL:
- [Modern OpenGL - Wikibooks](https://en.wikibooks.org/wiki/OpenGL_Programming/Modern_OpenGL_Introduction)

### Bibliotecas para manejo de ventanas y entradas:
- [Freeglut](https://freeglut.sourceforge.net/)
- [SDL](https://libsdl.org/)
- [GLFW](https://www.glfw.org/)