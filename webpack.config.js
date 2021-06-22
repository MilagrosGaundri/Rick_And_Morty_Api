const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'js/bundle.[contenthast].js',
        path: path.resolve(__dirname, 'dist'),
        publicPack: ""
    },
    mode: "production",
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/,
                resolve:{
                    extensions: ['.js', '.jsx'],
                },
            },
            
        ]
    }
}