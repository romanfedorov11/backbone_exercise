myapp.view.moviesContainer = Backbone.View.extend({
	events: {
		"keyup #searchmovie" : "search",
		"change #movieSorting":"sorts"
	},
	render: function(data) {
		$(this.el).html(this.template);
		return this;
	},
	renderList : function(movies){
		$("#movieList").html("");

		movies.each(function(movie){
			var view = new myapp.view.moviesItem({
				model: movie,
				collection: this.collection
			});
			$("#movieList").append(view.render().el);
		});
		return this;
	},
	initialize : function(){
		this.template = _.template($("#list_container_tpl").html());
		this.collection.bind("reset", this.render, this);
	},
	search: function(e){
		var letters = $("#searchmovie").val();
		this.renderList(this.collection.search(letters));
	},	
	sorts: function(e){
		var status = $("#movieSorting").find("option:selected").val();
		if(status == "") status = 0;
		this.renderList(this.collection.currentStatus(status));
	}
});
