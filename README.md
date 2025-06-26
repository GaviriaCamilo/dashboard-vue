# Prueba Técnica - Desarrollador Junior Full Stack

## 📋 Descripción del Proyecto

Este proyecto es una implementación de una aplicación web desarrollada con **Vue.js** como parte de una prueba técnica para la posición de Desarrollador Junior Full Stack. La aplicación replica un diseño específico proporcionado en Figma, enfocándose en demostrar habilidades de maquetación y desarrollo frontend. Demo: https://camilogaviria.netlify.app/sales

## 🚀 Tecnologías Utilizadas

- **Vue.js 3** - Framework principal
- **Tailwind CSS** - Para estilos y diseño responsive
- **Material Design Icons** - Iconografía
- **Vite** - Herramienta de build y desarrollo
- **JavaScript ES6+** - Lenguaje de programación

## 📦 Estructura del Proyecto

```
├── src/
│   ├── assets/          # Recursos estáticos (imágenes, logos)
│   ├── components/      # Componentes Vue reutilizables
│   │   ├── layout/      # Componentes de layout (Header, Sidebar)
│   │   └── sales/       # Componentes específicos de ventas
│   ├── views/           # Vistas principales de la aplicación
│   │   ├── BookingCalendarView.vue
│   │   ├── ConfigureApiView.vue
│   │   ├── CustomerView.vue
│   │   ├── HomeView.vue
│   │   ├── InventoryView.vue
│   │   ├── MarketingView.vue
│   │   ├── ReportsView.vue
│   │   ├── SalesView.vue
│   │   ├── ServiceView.vue
│   │   ├── SettingsView.vue
│   │   └── ShopifyView.vue
│   ├── router/          # Configuración de Vue Router
│   ├── styles/          # Estilos globales y configuración
│   └── layouts/         # Layouts de la aplicación
├── public/              # Archivos públicos
└── package.json         # Dependencias y scripts
```

## 🛠️ Instalación y Configuración

### Prerrequisitos

- Node.js (versión 16 o superior)
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/GaviriaCamilo/dashboard-vue
   cd dashboard-vue
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   ```

## 🎨 Características Implementadas

### ✅ Funcionalidades Principales

- **Diseño Totalmente Responsive** - Optimizado para todos los dispositivos (móvil, tablet, desktop)
- **Navegación Intuitiva** - Sidebar con navegación entre diferentes secciones
- **Componentes Reutilizables** - Arquitectura modular y escalable
- **Interfaz Moderna** - Siguiendo las especificaciones del diseño en Figma
- **Iconografía Consistente** - Uso de Material Design Icons

### 📱 Secciones Implementadas

- **Dashboard Principal** (Home)
- **Gestión de Ventas** (Sales)
- **Vista de Clientes** (Customer)
- **Calendario de Reservas** (Booking Calendar)
- **Inventario** (Inventory)
- **Marketing** (Marketing)
- **Reportes** (Reports)
- **Servicios** (Service)
- **Configuración** (Settings)
- **Integración Shopify** (Shopify)
- **Configuración API** (Configure API)

## 🎯 Aspectos Técnicos Destacados

### Responsive Design
- **Componentes Adaptativos**: Todos los elementos se ajustan según el tamaño de pantalla
- **Navegación Responsive**: Sidebar colapsable en dispositivos móviles
- **Tablas Responsivas**: Diseño especial para mostrar datos en pantallas pequeñas

### Arquitectura de Componentes
- Separación clara entre componentes de layout y funcionales
- Reutilización de componentes para mantener consistencia
- Props y eventos bien definidos para comunicación entre componentes

### Routing
- Configuración de Vue Router para navegación SPA
- Rutas organizadas por funcionalidad
- Navegación programática y declarativa

## 📸 Capturas de Pantalla

### Vista Desktop
![Dashboard Desktop](/src/assets/screenshots/desktop.png)
*Vista principal del dashboard en resolución de escritorio*

### Vista Móvil
![Dashboard Mobile](/src/assets/screenshots/mobile.png)
*Interfaz responsive optimizada para dispositivos móviles*

> **Nota**: La aplicación es totalmente responsive y se adapta perfectamente a todos los tamaños de pantalla, desde móviles pequeños hasta monitores grandes.

## 🔧 Scripts Disponibles

```bash
# Desarrollo
npm run dev
```

## 📝 Notas de Desarrollo

### Decisiones Técnicas

- **Tailwind CSS**: Elegido por su flexibilidad y facilidad para crear diseños responsive
- **Composición API**: Utilizada para mejor organización del código y reutilización de lógica
- **Componentes Single File**: Aprovechando la estructura .vue para encapsular lógica, template y estilos

### Consideraciones de Rendimiento

- Lazy loading de componentes para optimizar la carga inicial
- Uso eficiente de las directivas de Vue para renderizado condicional
- Optimización de assets e imágenes


## 👨‍💻 Autor

**Camilo Andrés Gaviria Hoyos**
- Desarrollador Junior Full Stack
