# Uso de imagen base
FROM node:lts-bullseye-slim

#Ejecuciones en modo root
RUN mkdir -p /home/app
RUN chown -R node /home/app

WORKDIR /home/app

COPY package.json pnpm-lock.yaml ./

#Cambio de directorio de npm para poder instalar pnpm
ENV NPM_CONFIG_PREFIX=/home/app/.npm-global
ENV PATH=$PATH:/home/app/.npm-global/bin

#Cambio de usuario, node es el usuario generico de la imagen
USER node

#instalación de dependencias
RUN npm install -g pnpm
RUN pnpm install
RUN rm package.json pnpm-lock.yaml
#Ejecucion de los test
ENTRYPOINT [ "pnpm","test"]
