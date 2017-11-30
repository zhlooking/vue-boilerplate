const path = require('path');


module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      }, {
        test: /\.html$/,
        loader: 'raw-loader',
      }
    ]
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js',
      app: path.resolve(__dirname, 'src')
    }
  }
};

