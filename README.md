# jsonscript-test-suite
Tests for JSONScript interpreters


[![Build Status](https://travis-ci.org/JSONScript/jsonscript-test-suite.svg?branch=master)](https://travis-ci.org/JSONScript/jsonscript-test-suite)
[![npm version](https://badge.fury.io/js/jsonscript-test-suite.svg)](https://www.npmjs.com/package/jsonscript-test-suite)


The repository contains a set of language agnostic test descriptions (JSON objects) that can be used to test JSONScript interpreters.

For JavaScript interpreters of JSONScript the package [jsonscript-test](https://github.com/JSONScript/jsonscript-test) can be used, otherwise they should be converted to tests in the chosen test framework.

The test files should be valid according to [the schema](https://github.com/JSONScript/jsonscript-test-suite/blob/master/test_suite_schema.json).
