# ETAPA 1: CONSTRUIR LA APLICACIÓN CON NODE
FROM node:20-slim AS build

WORKDIR /app

COPY . .

RUN corepack enable pnpm  \
    # && pnpm i --production \
    && pnpm i \
    && pnpm build

# ETAPA 2: SERVIR EL BUILD CON NGINX
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

# Exponer puerto 80 (el que usará el servidor)
EXPOSE 80

# Comando de arranque
CMD ["nginx", "-g", "daemon off;"]
