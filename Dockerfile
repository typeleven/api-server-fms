FROM node:latest

RUN mkdir -p /app/src

WORKDIR /app/src

COPY package.json .

RUN npm i

COPY . .

RUN npm run build

EXPOSE 9001

CMD ["npm","run","start"]