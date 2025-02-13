# asn-excel-frontend/Dockerfile
FROM node:22.12.0 as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod

FROM nginx:alpine
COPY --from=build /app/dist/asn-excel-frontend /usr/share/nginx/html