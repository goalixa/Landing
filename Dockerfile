# Basic static site image
FROM nginx:alpine

# Remove default site
RUN rm /usr/share/nginx/html/*

# Copy landing files
COPY public /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
