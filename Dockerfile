# Stage 0, "react-build", based on Node.js, to build and compile the frontend
FROM node:10 as react-build
COPY . ./
RUN yarn
RUN yarn build

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:alpine
COPY nginx.conf /usr/local/etc/nginx/nginx.conf
COPY --from=react-build /app/build /usr/local/etc/nginx/servers/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]