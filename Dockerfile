FROM node:lts-slim

RUN mkdir -p /app/test

WORKDIR /app/test

COPY package.json pnpm-lock.yaml /app/

ENV NPM_CONFIG_PREFIX=/home/node/.npm-global \
    PNPM_HOME=/.pnpm \ 
    PATH=${PATH}:${PNPM_HOME}:/home/node/.npm-global/bin

RUN chown -R node:node /app
USER node

RUN npm install -g pnpm \
    && pnpm install \
    && rm package.json pnpm-lock.yaml /app/

ENTRYPOINT ["pnpm","test"]
