FROM node:20-alpine
WORKDIR /app
COPY package.json package-lock.json vite.config.js ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 80
ENTRYPOINT ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "80"]