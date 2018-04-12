var path = require("path");

module.exports = {
  mode: 'development',
  context: __dirname,
  entry: "./frontend/quick_search",
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: "bundle.js"
  },
  // to unleash efficient webpack production build, uncomment the following:
// plugins: [
//   new webpack.DefinePlugin({
//     'process.env': {
//       NODE_ENV: JSON.stringify('production')
//     }
//   }),
//   new webpack.optimize.UglifyJsPlugin()
// ],
// uncomment until here
  module: {
    rules: [
      {
        test: [/.jsx?$/, /.js?$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react']
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: [".js", ".jsx", "*"]
  }
};