var path = require('path');
let webpack = require('webpack');

function resolve(targetPath) {
    return path.resolve(__dirname, targetPath)
}

var configPaths = {
    src: resolve('src'),
    dist: resolve('dist'),
    react: resolve('./node_modules/react/dist/react.js'),
    reactDom: resolve('./node_modules/react-dom/dist/react-dom.js'),
    uiStates: resolve('./node_modules/react-ui-states/dist/react-ui-states.js'),
};

module.exports = {
    devtool: 'source-map',
    context: configPaths.src,
    entry: {
        index: './index.js',
        vendor: [
            configPaths.react,
            configPaths.reactDom,
            configPaths.uiStates,
        ]
    },

    output: {
        path: configPaths.dist,
        filename: '[name].bundle.js',
        chunkFilename: "[id].bundle.js"
    },

    resolve: {
        root: configPaths.src,
        extensions: ['', '.js'],
        alias: {
            react: configPaths.react,
            'react-dom': configPaths.reactDom,
            'ui-states': configPaths.uiStates,
        },
    },

    module: {
        loaders: [
            {
                test: /.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            }
        ]
    },

    noParse: [
        /node_modules\//,
    ],

    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
    ]
};