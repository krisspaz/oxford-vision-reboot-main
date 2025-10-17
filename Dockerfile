FROM node:lts-slim

WORKDIR /app

# copiar archivos
COPY . .

# instalar dependencias y construir proyecto
RUN corepack enable pnpm  \
    && pnpm i \
    && pnpm build

# servir la aplicación por express
EXPOSE 3000

CMD ["pnpm", "start"]
