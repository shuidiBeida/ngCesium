// TODO::make sure you load everything before karma starts the tests (e.g. jQuery, Cesium etc.)
module.exports = function (config) {
    config.set({

        basePath: './',

        files: [
            'src/bower_components/jquery/dist/jquery.min.js',
            'src/bower_components/cesium/Cesium/Cesium.js',
            'src/bower_components/angular/angular.js',
            'src/bower_components/angular-ui-router/release/angular-ui-router.min.js',
            'src/bower_components/angular-mocks/angular-mocks.js',
            'src/bower_components/cesiumjs/CesiumUnminified/Cesium.js',
            'src/app/**/*.js'
        ],

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: ['Chrome'],

        plugins: [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
        ],

        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        }

    });
};
