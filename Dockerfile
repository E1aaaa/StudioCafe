FROM nginx:alpine

COPY *.html *.js /usr/share/nginx/html/
COPY css /usr/share/nginx/html/css
COPY images /usr/share/nginx/html/images
COPY menu_images /usr/share/nginx/html/menu_images

EXPOSE 80
