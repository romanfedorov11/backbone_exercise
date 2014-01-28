myapp.model.movies = Backbone.Model.extend({
	default:{
		completed:0,
		title: "",
		duration: "",
		year: "",
		director: ""
	},
});


var movies1 = new myapp.model.movies({
		completed:0,
		title: "The Shawshank Redemption",
		duration: "142 min",
		year: "1994",
		director: "Frank Darabont"
	}
);

var movies2 = new myapp.model.movies({
		completed:0,
		title:"The Godfather",
		duration: "142 min",
		year: "1994",
		director: "Frank Darabont"
	}
);


var movies3 = new myapp.model.movies({
		completed:0,
		title:"The Godfather: Part II",
		duration: "142 min",
		year: "1994",
		director: "Frank Darabont"
	}
);


var movies4 = new myapp.model.movies({
		completed:0,
		title:"The Dark Knight",
		duration: "142 min",
		year: "1994",
		director: "Frank Darabont"
	}
);

var movies5 = new myapp.model.movies({
		completed:0,
		title:"Pulp Fiction",
		duration: "142 min",
		year: "1994",
		director: "Frank Darabont"
	}
);

var movies6 = new myapp.model.movies({
		completed:0,
		title:"Il buono, il brutto, il cattivo.",
		duration: "142 min",
		year: "1994",
		director: "Frank Darabont"
	}
);

var movies7 = new myapp.model.movies({
		completed:0,
		title:"Schindler's List",
		duration: "142 min",
		year: "1994",
		director: "Frank Darabont"
	}
);

var movies8 = new myapp.model.movies({
		completed:0,
		title:"12 Angry Men",
		duration: "142 min",
		year: "1994",
		director: "Frank Darabont"
	}
);

var movies9 = new myapp.model.movies({
		completed:0,
		title:"The Lord of the Rings: The Return of the King",
		duration: "142 min",
		year: "1994",
		director: "Frank Darabont"
	}
);

var movies10 = new myapp.model.movies({
		completed:0,
		title:"Fight Club",
		duration: "142 min",
		year: "1994",
		director: "Frank Darabont"
	}
);
