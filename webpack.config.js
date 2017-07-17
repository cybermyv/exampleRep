/**
 * Created by y on 17.07.2017.
 */

module.exports = {

    context : __dirname+ '/app',

    entry: './app.js',

    output: {
        path: __dirname,
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
};