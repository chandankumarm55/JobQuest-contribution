# Use official Node.js image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the code
COPY . .

# Build the React app
RUN npm run build

# Serve the app
CMD ["npx", "serve", "-s", "build"]

# Expose the port
EXPOSE 3000
