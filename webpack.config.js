module.exports = [
    {
      entry: './src/index.js',
      output: {
        libraryTarget: 'umd',
        library: 'sero',
        filename: 'sero.min.js'
      },
      module : {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
      },
      optimization: { minimize: true },
      mode: 'production'
    },
    {
        entry: './src/index.js',
        output: {
            libraryTarget: 'umd',
            library: 'sero',
            filename: 'sero.js'
        },
        module : {
            rules: [
                { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
            ]
        },
        optimization: { minimize: false },
        mode: 'production'
    }
]
