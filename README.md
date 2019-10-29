# react-webpack-boilerplate

TODO: add build status github to top of this file, the code snippet is located in git stash: "build status github readme file"

## Features

- React 16
- Webpack 4
- Babel 7
- Hot Module Replacement
- code style and linting: eslint & prettier
- HtmlWebpackPlugin

## Installation

- `git clone git@github.com:sjondegast/react-webpack-boilerplate.git`
- cd react-webpack-boilerplate
- npm install
- npm start
- visit `http://localhost:8080/`

## test build webpack with http-server TODO: cd project root + run http-server code blocks readme...

- cd to project root
- run npm run build //npm script
- run http-server dist from terminal

## WEBPACK ADDONS

- webpack bundle analizer and visualizer

### webpack bundle analizer and visualizer

Intro... The bundle analizer
You can either set it to open the analyzer wen the npm script build:analyze is run via the terminal or in the webpack.bundleanalyzer.js file set the following to setting to true to open the analyer.

```javascript
const WebpackBundleAnalyzer = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

module.exports = {
  plugins: [
    new WebpackBundleAnalyzer({
      analyzerMode: 'static',
      reportFilename: './report.html',
      openAnalyzer: true,
    }),
  ],
};
```

The default for the bundle openAnalyzer is set to true, if you set it to false be aware that http-server currently has known issues and will not succesfully serve the static files from the bundle analyzer in the ./dist folder: dist/report.html and/or stats.html.

```bash
$ npm run build:analyze
$ http-server dist/report.html
$ http-server dist/stats.html
```
