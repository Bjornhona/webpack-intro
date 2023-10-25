const path = require('path'); // The path package let's up create absolute paths.

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    devtool: 'inline-source-map', // helps up locate errors in source files. For production mode, 'source-map' is recommended.
    // entry: './src/entry.js', // specifies the entry file. It gives us full control of the name and path of the entry file. The default path is './src/index.js'
    entry: { // This is the default setting, the same as the row on top.
        // main: './src/entry.js' // this 'main' is used to decide the output filename "name"
        main: path.resolve(__dirname, './src/entry.js')
    },
    output: { // here we control the bundled files.
        iife: true, // controls the IIFE wrapper that controls to true
        clean: true, // also the default setting, cleans up before bundeling
        filename: '[name].js' // this 'name' refers to the entry object "main".
    }
}
