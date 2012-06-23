require.config({
    paths: {
        h5bp:       'libs/h5bp/modernizr-2.5.3.min',
        jquery:     'libs/jquery/jquery',
        underscore: 'libs/underscore/underscore',
        backbone:   'libs/backbone/backbone',
        text:       'libs/require/text',
        json2:      'libs/json/json2',
        chosen:     'libs/chosen/chosen.jquery.min',
        jgrowl:     'libs/jgrowl/jquery.jgrowl.min',
        templates:  '../templates'
    },
    shim: {
      underscore: {
        exports: '_'
      },
      backbone: {
        deps: ['underscore', 'jquery'],
        exports: 'Backbone'
      },
      chosen: {
        deps:['jquery']
      },
      jgrowl:   {
        deps:['jquery']
      },
    }
});

require(['app', 'json2'], function(app) {
    app.initialize();
});