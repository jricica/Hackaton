# Plataforma Educativa MVP

Este proyecto es un punto de partida para una plataforma educativa basada en Flask. Incluye un conjunto de pantallas simples que permiten simular el flujo de un módulo de aprendizaje. La intención es que puedas extenderlo y personalizarlo fácilmente.

## Características incluidas

- Autenticación básica en la página de **Login**.
- Pantalla de **Overview** con un calendario de dos semanas y tareas arrastrables.
- **Dashboard** para visualizar el programa del curso.
- Vista de **Perfil** del usuario con opción a edición (solo plantilla).
- **Leaderboard** con posiciones de ejemplo.
- Páginas de **Material**, **Discusión**, **Quiz** y **Debate** para cada actividad del módulo.
- Pantalla de **Cierre de módulo** con resumen de resultados.

## Cómo ejecutar

1. Instala las dependencias

```bash
pip install -r requirements.txt
```

2. Inicia el servidor

```bash
python run.py
```

3. Abre `http://localhost:5000` en tu navegador para comenzar a explorar.

## Ideas para extender la plataforma

- Conectar la autenticación a una base de datos real.
- Guardar el progreso de las tareas utilizando un backend o `localStorage`.
- Mejorar el diseño de las plantillas con tu framework CSS favorito.
- Agregar gráficos o analíticas en el Dashboard.
- Implementar un sistema de mensajes o notificaciones.

Cada archivo HTML dentro de `templates/` puede modificarse para incluir más contenido o campos de formulario. Los estilos iniciales se encuentran en `static/css/styles.css` y el comportamiento de la página en `static/js/main.js`.

¡Esperamos que este MVP te sirva como inspiración para construir una plataforma educativa completa!
