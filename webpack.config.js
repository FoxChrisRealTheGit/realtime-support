module.exports = {
    entry: "./index.js",
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.jsx?$/,
                use: [
                    {
                        loader: "babel-loader",
                        query:
                        {
                            presets:['react']
                        }
                    }
                ]
            }
        ]
    }
}