# https://nodejs.org/en/docs/guides/nodejs-docker-webapp/

FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY *.json ./
COPY *.cjs ./


RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY public/ ./public/
COPY src/ ./src/

EXPOSE 8000

RUN npm run build

CMD ["npm", "run", "start" ]

