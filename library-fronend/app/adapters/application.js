import Ember from 'ember';
import DS from 'ember-data';
const { underscore, pluralize } = Ember.String;

export default  DS.JSONAPIAdapter.extend({
  namespace: 'api/v1',
  // if your rails app is on a different port from your ember app
  // this can be helpful for development.
  // in production, the host for both rails and ember should be the same.
  host: 'http://localhost:3000',

  // allows the multiword paths in urls to be underscored
  pathForType: function(type) {
    let underscored = underscore(type);
    return pluralize(underscored);
  },

});