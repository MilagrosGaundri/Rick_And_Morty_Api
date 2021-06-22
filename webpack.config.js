const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'js/bundle.[contenthast].js',
        path: path.resolve(__dirname, 'dist')
    }
}