module.exports = function (config) {
    config.set({
        frameworks: ['mocha'],
        reporters: ['mocha'],
        browsers: ['Chrome'],

        files: [
            {
                pattern: 'src/**/*.test.js',
                watched: true
            }
        ],

        preprocessors: {
            'src/**/*.test.js': ['webpack']
        },

        webpack: {
            module: {
                rules: [
                    {
                        test: /\.js$/,
                        use: ['babel-loader']
                    }
                ]
            }
        }
    })
}
