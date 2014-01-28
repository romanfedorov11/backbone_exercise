
myapp.router.movies = Backbone.Router.extend({
	routes: {
		"":  "list",  
	 },
	list: function(){
		this.listContainerView = new myapp.view.moviesContainer({
			collection:myapp.collection.movies
		});
		$("#contentContainer").append(this.listContainerView.render().el);
		this.listContainerView.sorts()	
	 }
});

myapp.router.movies = new myapp.router.movies;