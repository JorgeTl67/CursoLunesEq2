# Dockerfile para Node + Angular
FROM node:18-alpine AS builder
RUN apk add --no-cache git
WORKDIR /app
RUN git clone --branch main https://github.com/JorgeTl67/CursoLunesEq2.git .
WORKDIR /app/app-angular
RUN npm ci
RUN npm run build
FROM alpine:latest
RUN mkdir -p /dist
COPY --from=builder /app/app-angular/dist/app-angular/browser/* /dist/