# SpaceApp

This project is developed for listing the flight details

## Getting Started

Run npm from your application's directory to install all of its dependencies

## Local Development server with client side rendering

To run the application locally, type the following in your console emulator

```bash
ng serve
...

This will start a simple web server that you can access locally on your computer. It will also automatically compile all the typescript files and reload your browser whenever you make any change.

```

## Local Development server with Service side rendering

To run the application locally, type the following in your console emulator

```bash
npm run build:ssr
```

This will start the server at port 4000. You can access it by navigating to 'http://localhost:4000/' in your browser.

## Building for client side rendering

Generate a production build for the application. Use the `--prod` flag for a production build. The build artifacts will be stored in the `dist/` directory.

```bash
ng build
```
## Building for server side rendering

Generate a production build for the application. Use the `--prod` flag for a production build. The build artifacts will be stored in the `dist/` directory.

```bash
npm run serve:ssr
```

## Running unit tests

To run unit test cases with karma, run:

```bash
ng test
```
## Screenshots of Performance

! [Performance Screenshot] (/images/performance_screenshot.JPG)