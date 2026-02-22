# Usamos Node Alpine para que sea liviano
FROM node:20-alpine

# Creamos el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiamos solo lo necesario para instalar dependencias
COPY package.json package-lock.json vite.config.js ./

# Instalamos dependencias
RUN npm install

# Copiamos el resto del código
COPY . .

# Hacemos la build de producción
RUN npm run build

# Exponemos el puerto 80 para Kubernetes
EXPOSE 80

# Servimos la carpeta dist con 'serve' en el puerto 80
ENTRYPOINT ["npx", "serve", "-s", "dist", "-l", "80"]