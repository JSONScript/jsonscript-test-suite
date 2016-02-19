'use strict';

var glob = require('glob');
var Ajv = require('Ajv');
var assert = require('assert');
var path = require('path');


describe('test suites', function() {
  var validate;

  before(function() {
    var ajv = Ajv({ allErrors: true });
    ajv.addSchema(require('jsonscript/schema/schema.json'));
    validate = ajv.compile(require('../test_suite_schema.json'));
  });

  describe('validation according to the test suite schema', function() {
    var files = glob.sync('../tests/**/*.json', { cwd: __dirname });

    files.forEach(function (f) {
      it(path.basename(f), function() {
        var valid = validate(require(f));
        if (!valid) console.error('Error validating', f, '\nErrors:\n', validate.errors);
        assert(valid);
      });
    });
  });
});
