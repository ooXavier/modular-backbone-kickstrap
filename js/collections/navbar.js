(function($) {
  var Link = Backbone.Model.extend();

  var LinksCollection = Backbone.Collection.extend({
    model: Link
  });
  
  var NavBarView = Backbone.View.extend({
    el: $('#navbar'),
    render: function(eventName) {
      var self = this;
      $.get("templates/navbar/navbar.htm", function(data) {
        $(self.el).html(_.template(data)({ links: self.model.toJSON() }));
      });
      return this;
    },
    addLink: function(link) {
      this.model.add(link);
    }
  });

  app.navbar = new NavBarView({ model: new LinksCollection() });
  
})(jQuery);