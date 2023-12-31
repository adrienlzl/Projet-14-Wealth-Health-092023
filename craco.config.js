console.log("Chargement du fichier craco.config.js");

const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {

    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    format: {
                        comments: false,
                    },
                },
            }),
        ],
    },
};
