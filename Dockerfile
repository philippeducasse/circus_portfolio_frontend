FROM node:24-alpine AS build
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build

FROM node:24-alpine AS production
WORKDIR /app
COPY --from=build /app/.output ./output
EXPOSE 3000
CMD ["node", "output/server/index.mjs"]