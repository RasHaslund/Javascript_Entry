FROM nginx:alpine

COPY src/main/java/com/example/javascript_entry/NewHTML/index.html /usr/share/nginx/html/index.html
COPY src/main/java/com/example/javascript_entry/NewHTML/index.js /usr/share/nginx/html/index.js

EXPOSE 80
