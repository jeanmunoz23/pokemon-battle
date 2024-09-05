# Usa una imagen base de Node.js
FROM node:18

# Define el directorio de trabajo
WORKDIR /app

# Copia los archivos del proyecto al contenedor
COPY package*.json ./
COPY tsconfig*.json ./
COPY nest-cli*.json ./
COPY src ./src

# Instala las dependencias
RUN npm install

# Expone el puerto en el que el backend escuchará
EXPOSE 3004

# Define el comando para iniciar la aplicación
CMD ["npm", "run", "start:dev"]
