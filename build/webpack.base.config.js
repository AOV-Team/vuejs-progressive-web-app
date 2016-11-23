var path = require('path'),
    rootDir = path.resolve(__dirname, '../src');

module.exports = {
    entry: [
        path.join(rootDir, 'app.js')
    ],
    hostname: 'localhost',
    module: {
        loaders: [
        {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader?presets[]=es2015'
        },
        {
            test: /\.html$/,
            loader: 'html-loader'
        },
        {
          test: /\.json$/,
          loader: 'json'
        },
        {
            test: /\.css$/,
            loader: 'style!css'
        },
        {
            test: /\.styl$/,
            loader: 'style-loader!css-loader!stylus-loader'
        },
        {
            test: /\.(png|jpg)$/,
            loader: 'url?limit=25600'
        },
        {
            test: /\.vue$/,
            loader: 'vue'
        }]
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '',
        filename: 'bundle.js'
    },
    resolve: {
        root: rootDir
    }
};
