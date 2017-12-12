FROM     node:6.11
MAINTAINER prasanna [dot] nagabhushana [at] gmail [dot] com

# Create app directory
WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install -g @angular/cli@1.5.0

RUN npm install

COPY . .

RUN git init

RUN git submodule update --recursive --remote

EXPOSE 4200 4200

CMD [ "npm", "start"]
