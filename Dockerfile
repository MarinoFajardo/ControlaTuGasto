FROM node:lts-slim

RUN mkdir -p /app

WORKDIR /app/test

COPY package.json pnpm-lock.yaml ../

ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PNPM_HOME=/.pnpm
ENV PATH=${PATH}:${PNPM_HOME}:/home/node/.npm-global/bin

RUN chown -R node:node /app
USER node

RUN npm install -g pnpm \
    && pnpm install \
    && rm package.json pnpm-lock.yaml

ENTRYPOINT ["pnpm","test"]
