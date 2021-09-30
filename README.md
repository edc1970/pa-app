# PA App (pa-app)

A Personal Accident Insurance webapp using Quasar

## Install the dependencies
```bash
yarn
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```

### Lint the files
```bash
yarn run lint
```

### Build the app for production
```bash
quasar build
```

### Customize the configuration
See [Configuring quasar.conf.js](https://v2.quasar.dev/quasar-cli/quasar-conf-js).

[![Netlify Status](https://api.netlify.com/api/v1/badges/21e46686-7983-4893-b98b-943e51f29605/deploy-status)](https://app.netlify.com/sites/philsecure-pa/deploys)

## Backend Setup

For this project, you need both the front-end and back-end running at the same time. You will need an API key for the Bux.Ph API

- In the `backend` folder, rename `.env.sample` to `.env`
- Get your API credentials from the Bux.Ph Account
- Add your API credentials to `backend/.env`

### Install dependencies
```
cd backend
npm install
```

### Launch the backend
```
nodemon index.js
```