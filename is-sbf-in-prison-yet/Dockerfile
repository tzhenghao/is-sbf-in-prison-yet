# set base image
FROM node:18

WORKDIR /app

COPY . .

RUN yarn

RUN yarn build

EXPOSE 3000

CMD yarn serve ./build -p 3000 -s -n

