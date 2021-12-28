# React with Spotify Accounts Authentication

## Installation

Clone the repository and install its dependencies running:

```
$ npm i
```

### Using your own credentials (only if you want to generate an app for yourself, not needed for the workshop)

You will need to register your app and get your own credentials from the Spotify for Developers Dashboard.

To do so, go to [your Spotify for Developers Dashboard](https://beta.developer.spotify.com/dashboard) and create your application.
Then generate these Redirect URIs:

- http://localhost:3001 (needed for the implicit grant flow)
- http://localhost:3001/callback

Once you have created your app, replace the `client_id`, `redirect_uri` and `client_secret` in the `.env` file with the ones you get from My Applications.

## Running the App

To run the server and client at the same time:

```
$ npm start
```

This should open `http://localhost:3000` in your browser.

- Just the **server**:

```
$ npm run server
```

- Just the **client**:

```
$ npm run client
```
