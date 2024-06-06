# Use the official Node.js image as the base image
FROM node:20-alpine

# Setting up a build time variable
ARG DEV_NAME_1
ARG DEV_NAME_2
ARG DB_NAME
ARG DB_PASS
ARG INSTANCE_CONNECTION_NAME

# Create and set the working directory
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port the app runs on
ENV DEV_NAME_1 $DEV_NAME_1
ENV DEV_NAME_2 $DEV_NAME_2
ENV DB_NAME $DB_NAME
ENV DB_PASS $DB_PASS
ENV INSTANCE_CONNECTION_NAME $INSTANCE_CONNECTION_NAME
ENV PORT=8080

EXPOSE 8080

# Define the command to run the app
CMD ["node", "src/server.js"]
