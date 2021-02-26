const path = require('path')

module.exports = {
    target: 'node',
    entry: './src/index.ts',
    output: {
        path: path.join(__dirname, 'build'),
        publicPath: './build',
        filename: 'script.js',
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js', '.json'],
    },
}
