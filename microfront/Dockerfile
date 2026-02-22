FROM node:20-alpine

WORKDIR /app

# Copia solo los archivos necesarios para instalar dependencias
COPY package.json package-lock.json vite.config.js ./

RUN npm install

# Copia todo lo demás
COPY . .

# Genera build
RUN npm run build

# Instala serve para servir dist en producción
RUN npm install -g serve

EXPOSE 80

ENTRYPOINT ["serve", "-s", "dist", "-l", "80"]