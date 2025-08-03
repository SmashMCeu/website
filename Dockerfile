# Build stage
FROM node:20-alpine as build

# Install dumb-init for proper signal handling
RUN apk add --no-cache dumb-init

# Create app directory
WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install all dependencies (needed for build)
RUN npm ci && npm cache clean --force

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM node:20-alpine as production

# Install dumb-init for proper signal handling
RUN apk add --no-cache dumb-init

# Create non-root user for security
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nuxt -u 1001

# Create app directory
WORKDIR /app

# Copy built application from build stage
COPY --from=build --chown=nuxt:nodejs /app/.output /app/.output

# Set environment variables
ENV NODE_ENV=production
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

# Switch to non-root user
USER nuxt

# Expose port
EXPOSE 3000

# Use dumb-init to handle signals properly
ENTRYPOINT ["dumb-init", "node", ".output/server/index.mjs"]