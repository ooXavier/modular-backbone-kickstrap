define(['jquery',
  'underscore',
  'backbone',
  'chosen',
  'jgrowl',
  'router', // Request router.js
], function($, _, Backbone, router) {

    return {
        initialize: function() {
            Backbone.history.start();
            
            // jGrowl
            $.jGrowl("Welcome to Kickstrap. <a href=\"http://stanlemon.net/pages/jgrowl\" target=\"_blank\"><i class=\"icon-book\"></i> jGrowl Docs</a>", { life: 3000 });
            
            // Chosen
            $(".chzn-select").chosen();
            $(".chzn-select-deselect").chosen({allow_single_deselect:true});
        }
    };

});