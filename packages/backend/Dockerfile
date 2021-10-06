FROM node:lts-alpine as base
WORKDIR /app
RUN ls
COPY dist/ .
COPY prisma ./prisma

FROM base as dependencies
RUN yarn --production
RUN yarn add apollo-server-express
RUN yarn add sharp

FROM dependencies as prisma
RUN npx prisma generate
COPY . .

FROM prisma as release
ENV PORT=3000
EXPOSE ${PORT}

CMD node ./main.js
