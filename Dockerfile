
  
FROM node:alpine

#RUN useradd -ms /bin/bash/ app
#USER app

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./

RUN yarn install --force
COPY . ./

#ENV PORT 3000

#EXPOSE 3000

ENTRYPOINT ["yarn", "start"]