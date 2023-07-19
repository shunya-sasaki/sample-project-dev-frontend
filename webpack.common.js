const path = require("path");

module.exports = {
    entry: {
        app: path.resolve(__dirname, "src/index.js"),
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/react"],
                    },
                },
            },
        ],
    },
};
