# Etapa 1: construir la aplicación con Node
FROM node:20-slim AS build
WORKDIR /app

# Copiar dependencias e instalar
COPY package*.json ./
RUN npm install

# Copiar el resto del proyecto
COPY . .

# Compilar el proyecto Vite
RUN npm run build

# Etapa 2: servir el build con Nginx
FROM nginx:alpine
# Copiar archivos compilados desde la etapa anterior
COPY --from=build /app/dist /usr/share/nginx/html

# Exponer puerto 80 (el que usará el servidor)
EXPOSE 80

# Comando de arranque
CMD ["nginx", "-g", "daemon off;"]
