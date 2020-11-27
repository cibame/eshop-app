# Copy /dist folder. Be sure to have a /dist folder!
FROM nginx:1.19.2-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY dist/ /usr/share/nginx/html
