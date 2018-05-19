
const path=require('path')

module.exports=()=>{
    return {
    entry:'./public/app_redux.js',
    output:{
        filename:'bundle.js',
        path:path.join(__dirname,'public')
    },
    mode:'development',
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }]
    },
    devServer: {
        contentBase: path.join(__dirname, "public"), historyApiFallback: true
       
        }
    }
   
}