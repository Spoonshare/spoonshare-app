# About "bullseye" https://wiki.debian.org/DebianBullseye

FROM node:18.12.1-bullseye

LABEL project="Spoonshare UI"
LABEL version="0.1a"

WORKDIR /usr/src/app

COPY package.json .
COPY . .
RUN npm install --no-fund

EXPOSE 5173

CMD ["npm", "run", "dev"]
