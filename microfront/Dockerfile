COPY package.json package-lock.json vite.config.js ./
RUN npm install
COPY . .
RUN npm run build
ENTRYPOINT ["npx", "serve", "-s", "dist", "-l", "80"]