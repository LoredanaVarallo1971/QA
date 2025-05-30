FROM cypress/included:12.17.1

WORKDIR /e2e

COPY package.json ./
COPY package-lock.json ./
RUN npm ci

COPY . .

CMD ["npx", "cypress", "run", "--config-file", "cypress.config.js"]
