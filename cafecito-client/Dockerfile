FROM node:14.15.5

WORKDIR /usr/src/app/typescript

COPY package*.json ./

RUN npm ci

# Start
EXPOSE 3000
CMD ["npm", "run", "build"]