FROM node:12
WORKDIR /app/web
COPY . .
# Update npm and install
ENV VUE_APP_API_URL $VUE_APP_API_URL
RUN npm install

CMD ["npm", "start"]
