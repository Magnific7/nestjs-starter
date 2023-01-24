FROM node:14-alpine AS development
WORKDIR  /usr/src/app
COPY . .
RUN apk add --no-cache git
RUN npm i npm@latest -g
RUN npm install
RUN npm install -g @nestjs/cli

FROM development AS build
RUN npm run build


EXPOSE 3000

CMD ["npm", "start"]