# Uso de imagen base
FROM node:lts-slim

#Ejecuciones en modo root
RUN mkdir -p /app/test
RUN chown -R node /app

WORKDIR /app/test

COPY package.json /app

#Cambio de directorio de npm para poder instalar pnpm
ENV NPM_CONFIG_PREFIX=/app/.npm-global
ENV PATH=$PATH:/app/.npm-global/bin

#Cambio de usuario, node es el usuario generico de la imagen
USER node

#instalación de dependencias
RUN npm install -g pnpm
RUN pnpm install

#Ejecucion de los test
ENTRYPOINT [ "pnpm","test"]
