# Rempahpedia Backend Server

Welcome to the backend server for the Rempahpedia app. This server provides the necessary APIs for our mobile application.

## Table of Contents

- [Description](#description)
- [Production URL](#production-url)
- [API Documentation](#api-documentation)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Deployment](#deployment)
- [License](#license)

## Description

Rempahpedia is a mobile application that allows users to explore various spices. Our backend server supports the mobile app by providing all necessary APIs for data retrieval and management.

## Production URL

The production server is live at:
[https://rempahpedia-6qjjxs4fia-et.a.run.app](https://rempahpedia-6qjjxs4fia-et.a.run.app)

## API Documentation

The API documentation is available at:
[https://documenter.getpostman.com/view/23485693/2sA3XMiiJr](https://documenter.getpostman.com/view/23485693/2sA3XMiiJr)

## Installation

To set up the backend server locally, follow these steps:

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/rempahpedia-backend.git
    ```
2. Navigate to the project directory:
    ```sh
    cd rempahpedia-backend
    ```
3. Install dependencies:
    ```sh
    npm install
    ```
    or
    ```sh
    yarn install
    ```

## Environment Variables
The following environment variables are used in the deployment process:

sh
```
DB_NAME: Name of the database.
DB_PASS: Password for the database.
INSTANCE_CONNECTION_NAME: Connection name for the database instance.
FIREBASE_API_KEY: Firebase API key.
FIREBASE_AUTH_DOMAIN: Firebase Auth domain.
FIREBASE_PROJECT_ID: Firebase project ID.
FIREBASE_STORAGE_BUCKET: Firebase storage bucket.
FIREBASE_MESSAGING_SENDER_ID: Firebase messaging sender ID.
FIREBASE_APP_ID: Firebase app ID.
FIREBASE_SERVICE_ACCOUNT: Firebase service account credentials.
```

## Usage

To start the server, run:
```sh
npm start
```

## Deployment
To deploy the backend server to Google Cloud Run, follow these steps:

Authenticate to Google Cloud:
sh
```
gcloud auth login
```

Set your Google Cloud project:
sh
```
gcloud config set project [PROJECT_ID]
```

Enable the required Google Cloud APIs:
sh
```
gcloud services enable run.googleapis.com
gcloud services enable artifactregistry.googleapis.com
```

Authenticate Docker to Artifact Registry:
sh
```
gcloud auth configure-docker [REGION]-docker.pkg.dev
```

Build and push the Docker image:
sh
```
docker build --build-arg DB_NAME=$DB_NAME --build-arg DB_PASS=$DB_PASS --build-arg INSTANCE_CONNECTION_NAME=$INSTANCE_CONNECTION_NAME --build-arg FIREBASE_API_KEY=$FIREBASE_API_KEY --build-arg FIREBASE_AUTH_DOMAIN=$FIREBASE_AUTH_DOMAIN --build-arg FIREBASE_PROJECT_ID=$FIREBASE_PROJECT_ID --build-arg FIREBASE_STORAGE_BUCKET=$FIREBASE_STORAGE_BUCKET --build-arg FIREBASE_MESSAGING_SENDER_ID=$FIREBASE_MESSAGING_SENDER_ID --build-arg FIREBASE_APP_ID=$FIREBASE_APP_ID --build-arg FIREBASE_SERVICE_ACCOUNT="$FIREBASE_SERVICE_ACCOUNT" -t [REGION]-docker.pkg.dev/[PROJECT_ID]/[REPOSITORY_NAME]/[IMAGE_NAME]:[TAG] .
docker push [REGION]-docker.pkg.dev/[PROJECT_ID]/[REPOSITORY_NAME]/[IMAGE_NAME]:[TAG]
```

Deploy the Docker image to Cloud Run:
sh
```
gcloud run deploy [SERVICE_NAME] --image [REGION]-docker.pkg.dev/[PROJECT_ID]/[REPOSITORY_NAME]/[IMAGE_NAME]:[TAG] --region [REGION] --platform managed
```
> Replace the placeholders ([PROJECT_ID], [REGION], [REPOSITORY_NAME], [IMAGE_NAME], [TAG], and [SERVICE_NAME]) with your actual values.


## License
This project is licensed under the MIT License.
