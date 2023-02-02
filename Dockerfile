# Uso de imagen base
FROM node:lts-slim

#Ejecuciones en modo root
RUN mkdir -p /app/test \
    && chown -R node /app/test

WORKDIR /app/test

COPY package.json pnpm-lock.yaml ./
#Cambio de directorio de npm para poder instalar pnpm
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PNPM_HOME=/.pnpm
ENV PATH=${PATH}:${PNPM_HOME}:/home/node/.npm-global/bin

#Cambio de usuario, node es el usuario generico de la imagen
USER node

#instalación de dependencias
RUN npm install -g pnpm \
    && pnpm install \
    && rm package.json pnpm-lock.yaml

#Ejecucion de los test
ENTRYPOINT [ "pnpm" , "run" , "test" ]
