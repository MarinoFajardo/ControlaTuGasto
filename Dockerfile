# Uso de imagen base
FROM node:lts-slim

#Ejecuciones en modo root
RUN mkdir -p /home/app /.npm
RUN chown -R node /home/app

WORKDIR /home/app

COPY package.json pnpm-lock.yaml ./

#Cambio de directorio de npm para poder instalar pnpm
RUN chown -R 1001:1001 "/.npm"
ENV NPM_CONFIG_PREFIX=/home/app/.npm-global
ENV PATH=$PATH:/home/app/.npm-global/bin

#Cambio de usuario, node es el usuario generico de la imagen
USER node

#instalación de dependencias
RUN npm install -g pnpm
RUN pnpm install
RUN /bin/bash

#Ejecucion de los test
ENTRYPOINT [ "pnpm", "run","test"]
