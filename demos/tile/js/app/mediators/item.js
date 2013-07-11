(function(global) {

	'use strict';

	var ItemMediator = function(target, dispatcher, tpl, data) {
		this.id = data.id;

		console.log('item mediator created, with data:', data.id);

		var template = tpl(target);
		var scope = template.scope;

		scope.data = data;
		template.render();

		scope.remove = function() {
			target.parentNode.removeChild(target);
			dispatcher.dispatch('remove', data.id);
		};

		this.dispose = function() {
			console.log('item mediator removed', data.id);
			template.dispose();
			template = null;
		};

	};

	// export
	global.tile = global.tile || {};
	global.tile.ItemMediator = ItemMediator;

})(this);
