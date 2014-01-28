myapp.collection.movies = Backbone.Collection.extend({
	currentStatus : function(status){
		return _(this.filter(function(data) {
		  	return data.get("completed") == status;
		}));
	},
	search : function(letters){
		if(letters == "") return this;
		
		var pattern = new RegExp(letters,"gi");
		return _(this.filter(function(data) {
		  	return pattern.test(data.get("title"));
		}));
	}
});


myapp.collection.movies = new myapp.collection.movies([movies1,movies2,movies3,movies4,movies5,movies6,movies7,movies8,movies9,movies10]);











