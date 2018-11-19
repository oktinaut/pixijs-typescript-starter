const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "bundle.js",
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".glsl"],
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "ts-loader" },
            { test: /\.glsl$/, loader: "webpack-glsl-loader" },
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: "public" },
        ]),
    ],
    optimization: {
        splitChunks: {
            chunks: "all",
        },
    },
    devServer: {
        contentBase: path.resolve(__dirname, "./dist"),
        compress: true,
        port: 9000,
    },
}
