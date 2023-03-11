FROM node:18.15.0
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Start the server using the production build
CMD [ "node", "dist/src/main.js" ]
