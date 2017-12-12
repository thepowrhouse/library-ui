FROM     node:6.11
MAINTAINER prasanna [dot] nagabhushana [at] gmail [dot] com

# Create app directory
WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN git init

RUN git submodule update --recursive --remote

RUN npm install -g @angular/cli@1.5.0

RUN npm install

RUN npm i -g npm

CMD mv .angular-cli.json angular-cli.json

EXPOSE 4200 4200

ENTRYPOINT npm start
