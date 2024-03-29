FROM node:16.3.0

COPY ./packages/api/package.json .
COPY ./yarn.lock .
COPY tsconfig.base.json .

RUN yarn install --frozen-lockfile --non-interactive

COPY ./packages/api .

ENV PORT 80

RUN yarn build

RUN yarn install --production

EXPOSE 80

CMD [ "yarn", "start" ]
