MyApp.Errors = {};
 
(function(ns, $) {
  var Error = Backbone.Model.extend();
 
  var errorAlertTemplate = $.get("templates/errors/error-alert.html", function(data) {
    errorAlertTemplate = _.template(data);
  });

  var renderTemplate = function(self, url, render) {
    if (!self.template) {
      $.get(url, function(data) {
        self.template = _.template(data);
        render();
      });
    } else {
      render();
    }
  };
 
  var ErrorAlertView = Backbone.View.extend({
    el: $('#alert'),
    render: function(eventName) {
      var self = this;
      renderTemplate(self, "templates/errors/error-alert.html", function() {
        $(self.el).html(self.template(self.model.toJSON()));
      });
      return this;
    }
  });
 
  ns.errorAlert = function(title, message) {
    var error = new Error({ title: title, message: message });
    app.error = new ErrorAlertView({ model: error });
    app.error.render();
    $(".alert-message").alert();
  };
})(MyApp.Errors, jQuery);