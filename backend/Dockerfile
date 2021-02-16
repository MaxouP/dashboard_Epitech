FROM node:latest
WORKDIR /app/api

COPY package*.json ./
RUN npm install

COPY . .
# Update npm and install

EXPOSE $PORT

CMD ["npm", "run", "serve"]
