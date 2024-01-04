FROM node:20

EXPOSE 3000

WORKDIR /app

COPY package.json .

RUN npm install \
    && npm cache clean --force

COPY . .

CMD ./start-dev.sh