const { resolve } = require('path')

module.exports = {
  mode: 'production',
  entry: ['./src/lib/index.ts'],
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: 'nosources-source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 'ts-loader'
      }
    ]
  },
  externals: {
    child_process: 'commonjs child_process',
    fs: 'commonjs fs'
  }
}
