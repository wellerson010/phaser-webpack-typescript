var path = require('path');
var phaserModulePath = path.join(__dirname, '/node_modules/phaser-ce/');

module.exports = {
    entry: "./app/main.ts",
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "main.js"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        alias: {
            'phaser': path.join(phaserModulePath, 'build/custom/phaser-split.js'),
            'pixi': path.join(phaserModulePath, 'build/custom/pixi.js'),
            'p2': path.join(phaserModulePath, 'build/custom/p2.js')
        }
    },
    module: {
        loaders: [
            { test: /\.ts?$/, loader: "ts-loader" },
           /* { test: /pixi\.js/, loader: 'expose-loader', options: 'PIXI' },
            { test: /phaser-split\.js$/, loader: 'expose-loader', options: 'Phaser' },
            { test: /p2\.js/, loader: 'expose-loader', options: 'p2' }, */

            /*{ test: /pixi\.js/, use: [{loader: 'expose-loader', options: 'PIXI'}] },
            { test: /phaser-split\.js$/, use: [{loader: 'expose-loader', options: 'Phaser'}] },
            { test: /p2\.js/, loader: [{loader: 'expose-loader', options: 'p2'}] }, */
            { test: /pixi\.js$/, loader: 'expose-loader?PIXI' },
            { test: /phaser-split\.js$/, loader: 'expose-loader?Phaser' },
            { test: /p2\.js$/, loader: 'expose-loader?p2' },
        ]
    }
}