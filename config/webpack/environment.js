const { environment } = require('@rails/webpacker')
const typescript =  require('./loaders/typescript')

environment.loaders.prepend('typescript', typescript)
environment.loaders.append('html', {
    test: /\.html$/,
    use: [{
        loader: 'html-loader',
        options: {
            minimize: true,
            removeAttributeQuotes: false,
            caseSensitive: true,
            customAttrSurround: [ [/#/, /(?:)/], [/\*/, /(?:)/], [/\[?\(?/, /(?:)/] ],
            customAttrAssign: [ /\)?\]?=/ ]
        }
    }]
})

environment.loaders.prepend('style', {
    test: /\.s[ac]ss$/i,
    use: [
        {
            loader: "to-string-loader",
        }
    ]
});


module.exports = environment
