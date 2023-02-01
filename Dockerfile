# Uso de imagen base
FROM node:lts-bullseye-slim

#Ejecuciones en modo root
RUN mkdir -p /app/test

WORKDIR /app

COPY package.json /app
#Cambio de directorio de npm para poder instalar pnpm
ENV NPM_CONFIG_PREFIX=/home/app/.npm-global
ENV PATH=$PATH:/home/app/.npm-global/bin

#Cambio de usuario, node es el usuario generico de la imagen
RUN chown -R node /app
USER node

#instalación de dependencias
RUN npm install -g pnpm && pnpm install
WORKDIR /app/test

#Ejecucion de los test
ENTRYPOINT [ "pnpm","test"]
