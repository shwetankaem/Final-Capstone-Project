const path = require('path');

module.exports = {
    entry: './resources/js/script.js',
    output: {
      filename: 'capstone-main.js',
      path: path.resolve(__dirname, 'dist')
    },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  }
}