module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                cacheDirectory: true, 
                presets: ['react', 'es2015'] 
            }
        }
        ]
    },
    devServer: {
        contentBase: './dist',
        hot: true // Activate hot loading
    },
    resolve: {
        extensions: ['', '.js', '.es6']
    },
}
