# Uso de imagen base
FROM node:lts-slim

#Ejecuciones en modo root
RUN mkdir -p /app/test /.npm

WORKDIR /app/test

COPY package.json /app

#Cambio de directorio de npm para poder instalar pnpm
RUN chown -R 1001:0 "/.npm"
ENV NPM_CONFIG_PREFIX="/home/node/.npm-global"
ENV PNPM_HOME="/.pnpm"
ENV PATH="${PATH}:${PNPM_HOME}:/home/node/.npm-global/bin"

#Cambio de usuario, node es el usuario generico de la imagen
RUN chown -R node /app
USER node

#instalación de dependencias
RUN npm install --global pnpm
RUN pnpm install

#Ejecucion de los test
ENTRYPOINT [ "pnpm", "run","test"]
