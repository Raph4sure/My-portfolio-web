FROM node:alpine

RUN addgroup -S app && adduser -S app -G app


USER app


WORKDIR /app

COPY package*.json ./

USER root

RUN chown -R app:app .

USER app

RUN npm install

COPY . .

EXPOSE 5173

CMD npm run dev