const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
    mode: 'development',
    entry: "./src/mainVM.js", // エントリーポイント
    output: { // 出力ファイルの名前と場所
        path: __dirname + '/dist',
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.vue$/, // 拡張子vueのときは、vue-loaderを使う
                use: "vue-loader"
            },
            {
                test: /\.css$/, // 拡張子cssのときは、style-loaderとcss-loaderを使う
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [new VueLoaderPlugin()],
    resolve: { // node_modulesをロケーションに指定することにより、パスを書くときにnode_modulesを省略できる
        modules: [
            "node_modules"
        ],
        alias: {
            vue: 'vue/dist/vue.js'
        }
    }
}