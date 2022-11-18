# set base image
FROM node:18

WORKDIR /app

COPY . .

RUN yarn

RUN yarn build

EXPOSE 80

CMD yarn serve ./build -p 80 -s -n

