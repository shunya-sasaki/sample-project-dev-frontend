const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
    mode: "production",
    plugins: [
        new HtmlWebpackPlugin({
            title: "Production",
            template: path.resolve(__dirname, "src/index.ejs"),
            templateParameters: {
                title: "Prodcution",
            },
        }),
    ],
});
