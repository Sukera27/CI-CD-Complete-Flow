# Usamos una imagen ligera para servir archivos estáticos
FROM nginx:alpine

# Copiamos la carpeta dist al directorio de nginx
COPY dist/ /usr/share/nginx/html

# Exponemos el puerto 80
EXPOSE 80

# Ejecuta nginx en foreground
CMD ["nginx", "-g", "daemon off;"]