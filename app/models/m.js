import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr(),
  selected: true,
  // selected: DS.attr('boolean'),

  combined: Ember.computed('name', 'selected', function() {
    console.log('combined')
    return this.get('name') + '_' + this.get('selected');
  }),

  init: function() {
    this._super(...arguments);
    this.get('compound');
  }
});
