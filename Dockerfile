# Use the official Node.js image as the base image with the latest LTS version
FROM node:lts-alpine

# Set the working directory
WORKDIR /app

ARG BASEURL

ENV BASEURL=$BASEURL

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Set the working directory to src
WORKDIR /app/src

# Build the Next.js application
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]
