FROM node:lts-slim

RUN mkdir -p /app/test

ENV NPM_CONFIG_PREFIX=/home/node/.npm-global \
    PNPM_HOME=/.pnpm \ 
    PATH=${PATH}:${PNPM_HOME}:/home/node/.npm-global/bin

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN chown -R node /app

USER node

RUN npm install -g pnpm \
    && pnpm install \
    && rm package.json pnpm-lock.yaml 

WORKDIR /app/test

ENTRYPOINT ["pnpm","test"]
