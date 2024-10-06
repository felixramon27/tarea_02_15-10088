#include <GL/glut.h>

// Clears the current window and draws a triangle.
void display() {

  // Establece el color de fondo al color hexadecimal 1b1e2b.
  glClearColor(0.106, 0.118, 0.169, 1.0);
  glClear(GL_COLOR_BUFFER_BIT);

  // Dibuja un triángulo equilátero con colores rojo, verde y azul.
  glBegin(GL_POLYGON);
    glColor3f(1.0, 0.0, 0.0); glVertex3f(0, 0.87, 0);       // Vértice 1: Rojo (arriba)
    glColor3f(0.0, 1.0, 0.0); glVertex3f(-0.5, -0.5, 0);    // Vértice 2: Verde (izquierda)
    glColor3f(0.0, 0.0, 1.0); glVertex3f(0.5, -0.5, 0);     // Vértice 3: Azul (derecha)
  glEnd();

  // Forzar el dibujo.
  glFlush();
}

// Initializes GLUT, the display mode, and main window; registers callbacks;
// enters the main event loop.
int main(int argc, char** argv) {

  // Usar una ventana con buffer simple en modo RGB.
  glutInit(&argc, argv);
  glutInitDisplayMode(GLUT_SINGLE | GLUT_RGB);

  // Posicionar la ventana en (80,80)-(480,380) y darle un título.
  glutInitWindowPosition(80, 80);
  glutInitWindowSize(400, 300);
  glutCreateWindow("Equilateral Triangle");

  // Registrar la función de dibujo.
  glutDisplayFunc(display);

  // Iniciar el bucle de eventos de GLUT.
  glutMainLoop();
}
