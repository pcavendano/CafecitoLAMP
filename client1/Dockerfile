FROM node:10.13.0-alpine

# Create Directory for the Container
WORKDIR /usr/src/app

# Only copy the package.json file to work directory
COPY package*.json ./

# Install all Packages
RUN npm install node-sass && npm install

# Copy all other source code to work directory
ADD . /usr/src/app
# TypeScript


# Start
EXPOSE 8080
CMD ["npm", "run", "start"]