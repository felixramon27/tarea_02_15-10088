Aquí tienes un archivo `README.md` adaptado para tu proyecto de Computación Gráfica, incluyendo la información que proporcionaste:

```markdown
# Tarea de Computación Gráfica - Triángulo Equilátero con OpenGL

**Nombre:** Felix Arnos  
**Carnet:** 15-10088  
**API:** OpenGL y GLUT

## Sistema Operativo

Este proyecto fue desarrollado en **Windows 11**.

## Dependencias

Este proyecto utiliza las siguientes dependencias:

- **OpenGL**: Biblioteca para renderizado gráfico en 2D y 3D.
- **GLUT**: Utilidad de OpenGL para crear ventanas y manejar eventos.
- **GLEW**: Biblioteca que ayuda a manejar extensiones de OpenGL.
- **GLFW**: Biblioteca para crear ventanas y manejar entrada.
- **FreeGLUT**: Una implementación alternativa de GLUT.

### Instalación de dependencias

Antes de ejecutar el proyecto, asegúrate de tener **MSYS2** instalado en tu sistema. Si no lo tienes, puedes descargarlo desde [MSYS2](https://www.msys2.org/).

Luego, instala las dependencias ejecutando los siguientes comandos en la terminal de MSYS2:

```bash
pacman -Syu
pacman -S mingw-w64-x86_64-toolchain
pacman -S mingw-w64-x86_64-glew
pacman -S mingw-w64-x86_64-glfw
pacman -S mingw-w64-x86_64-freeglut
```

### Instrucciones para ejecutar el proyecto

1. **Instalar MSYS2**:
   Asegúrate de tener MSYS2 instalado en tu sistema.

2. **Instalar dependencias**:
   Ejecuta los comandos mencionados arriba para instalar las dependencias necesarias.

3. **Generar y descargar Glad**:
   Ve a [Generate and Download Glad](https://glad.dav1d.de/) para obtener el archivo `glad.c` y el encabezado asociado. Asegúrate de incluir estos archivos en tu proyecto.

### Compilación y ejecución del proyecto

Para compilar y ejecutar el proyecto, utiliza el siguiente comando en la terminal de MSYS2:

```bash
cd "c:/Users/felix/OneDrive/Escritorio/ComputacionGrafica/Tarea2/OpenGL/" && g++ /c/msys64/mingw64/include/glad/glad.c main.cpp -o main -lopengl32 -lfreeglut -lglu32 -lglew32 -lglfw3 -lgdi32 -lmingw32 && ./main
```

### Explicación del código

El programa renderiza un triángulo equilátero en una ventana de OpenGL con los siguientes colores:

- **Rojo**: Arriba
- **Verde**: Izquierda
- **Azul**: Derecha

Los colores de fondo y de los vértices están establecidos utilizando los valores hexadecimales especificados: `#1b1e2b` (fondo), `#ff0000` (rojo), `#00ff00` (verde) y `#0000ff` (azul).

### Recursos

- [Documentación de OpenGL](https://www.opengl.org/documentation/)
- [GLUT Documentation](https://www.opengl.org/resources/libraries/glut/)
- [GLEW Documentation](http://glew.sourceforge.net/)
- [GLFW Documentation](https://www.glfw.org/documentation.html)

### Video de referencia

Todo el proceso de instalación y configuración se realizó siguiendo los pasos de este video: [YouTube Tutorial](https://www.youtube.com/watch?v=GaMTjQouBcM).
```