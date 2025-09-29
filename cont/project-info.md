
# Información del Proyecto: gvnzza programmer

## Resumen del Proyecto

Este es un proyecto Next.js para **gvnzza programmer**, una plataforma para la venta de páginas web y soluciones digitales a medida. La aplicación permite a los usuarios explorar proyectos, ver detalles y contactar para la compra. También incluye una sección para que los vendedores publiquen nuevos productos, con la ayuda de IA para generar descripciones atractivas.

## Tecnologías Utilizadas

*   **Framework:** Next.js (con App Router)
*   **Lenguaje:** TypeScript
*   **UI:** React, ShadCN UI, Tailwind CSS
*   **Inteligencia Artificial:** Genkit (Google AI)
*   **Iconos:** lucide-react

## Estructura del Proyecto

*   `src/app/`: Contiene las rutas principales de la aplicación.
    *   `/`: Página de inicio.
    *   `/projects/[id]`: Página de detalle para cada proyecto.
    *   `/login`: Página de inicio de sesión.
    *   `/signup`: Página de registro.
    *   `/sell`: Formulario para publicar un nuevo producto.
*   `src/components/`: Componentes reutilizables de React.
    *   `layout/`: Componentes de la estructura principal (Header, Footer).
    *   `ui/`: Componentes de la librería ShadCN.
    *   `project-card.tsx`: Tarjeta de vista previa para cada proyecto.
*   `src/lib/`: Lógica de negocio, tipos y datos de ejemplo.
    *   `placeholder-data.ts`: Datos de ejemplo para los proyectos.
    *   `placeholder-images.json`: Datos de las imágenes de ejemplo.
    *   `utils.ts`: Funciones de utilidad.
*   `src/ai/`: Lógica relacionada con la Inteligencia Artificial.
    *   `flows/generate-project-description.ts`: Flujo de Genkit para generar descripciones de proyectos.
*   `public/`: Archivos estáticos.
*   `package.json`: Dependencias y scripts del proyecto.

## Funcionalidades Clave

*   **Página de Inicio:** Presenta la propuesta de valor, los servicios y una selección de proyectos destacados.
*   **Vista de Proyectos:** Los usuarios pueden explorar una lista de proyectos y diseños web.
*   **Detalle del Proyecto:** Cada proyecto tiene una página dedicada con su descripción, características, precio e imágenes.
*   **Formulario de Venta con IA:** Un formulario permite a los vendedores añadir nuevos productos. Una función de IA asiste en la creación de descripciones de producto profesionales y persuasivas basadas en las características, el público objetivo y la propuesta de valor.
*   **Contacto por WhatsApp:** Botones de acción para iniciar una conversación directa por WhatsApp.
*   **Diseño Responsivo:** La interfaz está adaptada para funcionar correctamente en dispositivos móviles y de escritorio.

## Dependencias Principales

*   `next`: Framework de React para producción.
*   `react`: Librería para construir interfaces de usuario.
*   `tailwindcss`: Framework de CSS para diseño rápido.
*   `@radix-ui/react-*`: Componentes base para la UI.
*   `lucide-react`: Biblioteca de iconos.
*   `genkit`: Toolkit de Google para funcionalidades de IA.
*   `zod`: Para validación de esquemas.
*   `react-hook-form`: Para la gestión de formularios.
