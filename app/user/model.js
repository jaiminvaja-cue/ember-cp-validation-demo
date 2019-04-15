import DS from 'ember-data';

export default DS.Model.extend({
  bar: this.attr('string'),
  foo: this.attr('string'),
});
