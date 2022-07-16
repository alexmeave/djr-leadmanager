// 2.1.2 Creamos archivo de configuración de webpack
module.exports = {
    devtool: "source-map",
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use:{
					loader: "babel-loader"
				}
			}
		]
	}
}

