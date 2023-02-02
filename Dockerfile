# Uso de imagen base
FROM node:lts-slim

#Ejecuciones en modo root
RUN mkdir -p /app/test

WORKDIR /app

COPY package.json /app/test
#Cambio de directorio de npm para poder instalar pnpm
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH=$PATH:/home/node/.npm-global/bin

#Cambio de usuario, node es el usuario generico de la imagen
RUN chown -R node /app
USER node

#instalación de dependencias
RUN npm install -g pnpm \
    && pnpm install
WORKDIR /app/test

#Ejecucion de los test
ENTRYPOINT [ "pnpm","test"]
