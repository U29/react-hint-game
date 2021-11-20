const path = require('path')
module.exports = {
    mode: "development",
    entry: "./src/index.tsx",
    output: {
        path: `${__dirname}/public`,
        filename: "main.js"
    },
    module: {
        rules: [
            {
                // 拡張子 .ts もしくは .tsx の場合
                test: /\.tsx?$/,
                // TypeScript をコンパイルする
                use: "ts-loader"
            },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
        ]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    target: ["web", "es5"],
    devtool: 'inline-source-map',
    devServer: {
        static: path.join(__dirname, 'public'),
        open: true,
        port: 3000,
        historyApiFallback: true,
    },
};