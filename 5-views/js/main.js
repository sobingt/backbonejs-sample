var Person = Backbone.Model.extend({
	defaults: {
		name: 'John Doe',
		age: 30,
		occupation: 'worker'
	}
});

var PersonView = Backbone.View.extend({
	tagName: 'li',

	initialize: function() {
		this.render();
	},

	render: function() {
		// anti-pattern
		this.$el.html( this.model.get('name') + ' (' + this.model.get('age') + ') - ' + this.model.get('occupation') );
	}
});

var person = new Person;
var personView = new PersonView({ model: person });