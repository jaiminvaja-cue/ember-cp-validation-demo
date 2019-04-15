import Component from '@ember/component';
import { validator, buildValidations } from 'ember-cp-validations';
import { computed } from "@ember/object";

const Validations = buildValidations({
  bar: {
    description: 'bar',
    validators: [
      validator('presence', true),
      validator('length', {
        min: 5
      })
    ],
    // disabled: true
  },
  foo: validator('presence', true)
})

export default Component.extend(Validations, {
  bar: null,
  foo: null,
  isFormValid: computed.alias('validations.isValid')
});
