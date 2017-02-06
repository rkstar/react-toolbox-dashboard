dashboard


to run:

1. `npm i`
2. `npm run build:dev:server`
3. (separate tab or window) `npm run dev:server`

`build:dev:server` will start a webpack -w process to watch for changes to the server

`dev:server` will run `react-toolbox-themr` and then `nodemon` the `src/client` dir to watch for changes to client files.

this setup allows for **hmr** and automatic server rebuilding/restarting during development.