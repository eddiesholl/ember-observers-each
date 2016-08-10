import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    this.store.createRecord('m', {
      name: 'first'
    });
    this.store.createRecord('m', {
      name: 'second'
    });
    this.store.createRecord('m', {
      name: 'third'
    });

    return this.store.peekAll('m');
  }
});
