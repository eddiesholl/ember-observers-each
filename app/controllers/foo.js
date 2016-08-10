import Ember from 'ember';

export default Ember.Controller.extend({
  filteredItems: Ember.computed('model.@each.combined', function() {
    console.log('filter')
    return this.get('model').filterBy('selected');
  }),
  watcher: false,

  actions: {
    toggle: function() {
      const model = this.get('model');
      const first = model.objectAt(0);
      first.toggleProperty('selected');
    },
    toggleWatcher: function() {
      this.toggleProperty('watcher');
    },
  }
});
