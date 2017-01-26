import Ember from 'ember';

export default Ember.Controller.extend({


	emailAddress: '',

	isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
	isDisabled: Ember.computed.not('isValid'),

	actions: {
		saveInvitation(){
			alert(`Saving this email address is in progress: ${this.get('emailAddress')}`);
			this.set('responseMessage', `Thank you! We just saved your eumail address: ${this.get('emailAddress')}`);
			this.set('emailAddress', '');
		}
	}

});
