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


            { test: /\.css$/, loader: "style-loader!css-loader" },

            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }


        ]
    }
};