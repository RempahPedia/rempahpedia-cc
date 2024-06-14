# Use the official Node.js image as the base image
FROM node:20-alpine

# Setting up a build time variable
ARG DB_NAME
ARG DB_PASS
ARG INSTANCE_CONNECTION_NAME
ARG FIREBASE_API_KEY
ARG FIREBASE_AUTH_DOMAIN
ARG FIREBASE_PROJECT_ID
ARG FIREBASE_STORAGE_BUCKET
ARG FIREBASE_MESSAGING_SENDER_ID
ARG FIREBASE_APP_ID
ARG FIREBASE_SERVICE_ACCOUNT

# Create and set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Create service account for firebase
RUN echo "$FIREBASE_SERVICE_ACCOUNT" > /app/src/firebaseService.json

# Define ENV
ENV DB_NAME $DB_NAME
ENV DB_PASS $DB_PASS
ENV INSTANCE_CONNECTION_NAME $INSTANCE_CONNECTION_NAME
ENV FIREBASE_API_KEY $FIREBASE_API_KEY
ENV FIREBASE_AUTH_DOMAIN $FIREBASE_AUTH_DOMAIN
ENV FIREBASE_PROJECT_ID $FIREBASE_PROJECT_ID
ENV FIREBASE_STORAGE_BUCKET $FIREBASE_STORAGE_BUCKET
ENV FIREBASE_MESSAGING_SENDER_ID $FIREBASE_MESSAGING_SENDER_ID
ENV FIREBASE_APP_ID $FIREBASE_APP_ID
ENV PORT=8080

EXPOSE 8080

# Define the command to run the app
CMD ["node", "src/server.js"]
