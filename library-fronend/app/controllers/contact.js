import Ember from 'ember';

export default Ember.Controller.extend({
	isValidEmail: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
	isMessageLongEnough: Ember.computed.gte('message.length', 5),
	
	isValid: Ember.computed.and('isValidEmail', 'isMessageLongEnough'),

	actions: {
		sendMessage(){

			let email = this.get('emailAddress');
			let message = this.get('message');

			alert("Your message is procesing...");

			let responseMessage = "To: " +email+ ', Message: ' +message;
			this.set('responseMessage', responseMessage);
			this.set('emailAddress', '');
			this.set('message', '');
		}
	}

});
