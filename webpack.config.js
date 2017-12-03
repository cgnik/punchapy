module.exports = {
    "context": __dirname,
    "entry": "./src/index.js",
    "output": {
        "path": __dirname + "/public",
        "filename": "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /css$/,
                exclude: /node_modules/,
                loaders: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },
};