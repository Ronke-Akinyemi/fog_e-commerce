# This Dockerfile builds the React client and API together

# Build step #1: build the React front end
FROM node:16-alpine as build-step
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY ./package.json ./
COPY ./src ./src
COPY ./public ./public
RUN npm install
RUN npm run build

# Build step #2: build the API with the client as static files
FROM python:3.8-slim-buster
WORKDIR /app
COPY --from=build-step /app/build ./build

RUN mkdir ./api
COPY ./requirements.txt ./app.py ./api/
RUN pip install -r ./api/requirements.txt

EXPOSE 3000
WORKDIR /app/api
CMD ["gunicorn", "-b", ":3000", "app:app"]