const ClosurePlugin = require('closure-webpack-plugin');

module.exports = {
    pwa: {
        name: 'Piped',
        themeColor: '#fa4b4b',
        msTileColor: '#000000',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'black',
        workboxPluginMode: 'GenerateSW',
        workboxOptions: {
            navigateFallback: 'index.html',
            skipWaiting: true,
            importWorkboxFrom: 'local',
            runtimeCaching: [{
                urlPattern: /\.(?:png|svg|ico)$/,
                handler: 'CacheFirst',
            }],
        }
    },
    configureWebpack: {
        optimization: {
            minimizer: [
                new ClosurePlugin({ mode: 'AGGRESSIVE_BUNDLE' }, {
                    // compiler flags here
                    //
                    // for debugging help, try these:
                    //
                    // formatting: 'PRETTY_PRINT'
                    // debug: true,
                    // renaming: false
                })
            ]
        }
    }
}
