myapp.view.moviesItem = Backbone.View.extend({
	events: {},
	render: function(data) {
		$(this.el).html(this.template(this.model.toJSON()));
		return this;
	},
	initialize : function(){
		this.template = _.template($("#movie_item_tpl").html());
	}
});