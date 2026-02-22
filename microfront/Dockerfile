FROM node:20-alpine

ADD . .
WORKDIR "./app"

RUN ["npm", "install"]

EXPOSE 80

ENTRYPOINT ["npm","run", "preview"]

