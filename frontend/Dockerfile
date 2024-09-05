# Usa una imagen oficial de Node.js para la fase de construcción
FROM node:18-alpine as build

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código de la aplicación
COPY . .

# Construye la aplicación para producción
RUN npm run build

# Fase 2: Usa una imagen de servidor Nginx para servir la aplicación
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

# Expone el puerto por donde correrá Nginx
EXPOSE 80

# Comando para correr Nginx
CMD ["nginx", "-g", "daemon off;"]
