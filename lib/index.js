/**
 * Modules
 */

var formElements = require('@f/form-elements')
var slice = require('@f/slice')

/**
 * Constants
 */

var selector = formElements.join(',')

/**
 * Expose formControls
 */

module.exports = formControls

/**
 * formControls
 */

function formControls (form) {
  return slice(form.elements || form.querySelectorAll(selector))
}
