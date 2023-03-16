const path = require('path')

module.exports = {
  mode: 'production',
  entry: ['./src/lib/index.ts'],
  target: 'node-webkit',
  output: {
    filename: 'bundle.js',
    libraryTarget: 'commonjs2',
    path: path.resolve(__dirname, 'dist')
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
    fs: 'commonjs fs',
    os: 'commonjs os',
    child_process: 'commonjs child_process'
  }
}
