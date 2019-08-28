const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/index.ts',
    devtool: 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader"
            }
          ]
        },
        {
          test: /\.css$/i,
          use: [
            'style-loader', 'css-loader'
          ],
        },
        {
          test: /\.(png|jpg|gif)$/,          
          use: {
            loader: "url-loader",
            options: {
              limit: 25000
            },
          },
        }
      ]
    },
    resolve: {
      extensions: [ '.tsx', '.ts', '.js' ]
    },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: "./src/public/index.html",
        filename: "./index.html"
      })
    ],
    devServer: {
      historyApiFallback: {
          index: '/'
      },
    }
  };