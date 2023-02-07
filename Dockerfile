# Uso de imagen base
FROM node:lts-slim

#Ejecuciones en modo root
RUN mkdir -p /home/node/app/test && chown -R node:node /home/node/app

WORKDIR /home/node/app

# Copiamos para instalar las dependencias
COPY package.json pnpm-lock.yaml ./

#Cambio de directorio de npm para poder instalar pnpm
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PNPM_HOME=/.pnpm
ENV PATH=${PATH}:${PNPM_HOME}:/home/node/.npm-global/bin

#Cambio de usuario, node es el usuario generico de la imagen
USER node

#instalación de dependencias
RUN npm install -g pnpm \
    && pnpm install

COPY --chown=node:node . .

#Ejecucion de los test
ENTRYPOINT ["pnpm","test"]
