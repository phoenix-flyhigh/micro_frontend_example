// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "src/index.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main[contenthash].js",
        clean: true,
        assetModuleFilename: '[name][ext]',
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js'], 
    },
    devtool: "source-map",
    devServer: {
        static: {
            directory: path.resolve(__dirname, "dist"),
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
              },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                ],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Home Page",
            filename: "index.html",
            template: "src/index.html"
        }),
        new ModuleFederationPlugin({
            name: 'host', // The unique name of your host application
            remotes: {
              remoteApp: 'remoteApp@http://localhost:3002/remoteEntry.js', // Define the name and URL of your remote application
            },
            shared: { // Define shared dependencies if any
              react: { singleton: true, eager: true },
              'react-dom': { singleton: true, eager: true },
            },
          }),
    ]
};
