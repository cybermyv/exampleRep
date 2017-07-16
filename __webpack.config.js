
module.exports = {
    entry: './app/app.js',
    output: {
        filename: 'bundle.js'

    },
    module: {

        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },

            {
                test: /\.(html)$/,
                use: [
                    'html-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            },


                { test: /\.css$/, loader: "style-loader!css-loader" }


        ]
    }
}