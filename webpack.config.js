let path=require('path');
let HtmlWebpackPlugin=require('html-webpack-plugin');
module.exports={
    resolve: {
        extensions: ['.js','.jsx', '.ts', '.tsx'],
    },
    mode: "production",
    entry:{
        'tx':'./components'
    },
    output: {
      /*  path: path.resolve(__dirname,'dist'),*/
        filename: "[name].[hash:6].js",

    },
    module: {
        rules: [
           /* {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },*/
            {
                test: /\.(ts|tsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        configFile: path.resolve(__dirname, './tsconfig.json'),
                       /* presets: ['@babel/preset-env']*/
                    }
                }
            }
        ]
    },
    plugins: [
       /* new HtmlWebpackPlugin({
            template: "./public/index.html"
        }),*/

    ],
    node: {
        fs: "empty"
    }
}