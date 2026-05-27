FROM node:18-alpine
WORKDIR /app

# Copy the shared database layer
COPY database/ ./database/
COPY backend/ ./backend/

WORKDIR /app/database
RUN npm install
RUN npx prisma generate

WORKDIR /app/backend
RUN npm install

EXPOSE 4000
# Run via ts-node for this initial setup
CMD ["npx", "ts-node", "src/index.ts"]
