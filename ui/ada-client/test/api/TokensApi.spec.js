/**
 * Platform API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.PlatformApi);
  }
}(this, function(expect, PlatformApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new PlatformApi.TokensApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('TokensApi', function() {
    describe('createApiTokenTokensPost', function() {
      it('should call createApiTokenTokensPost successfully', function(done) {
        //uncomment below and update the code to test createApiTokenTokensPost
        //instance.createApiTokenTokensPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteApiTokenTokensTokenIdDelete', function() {
      it('should call deleteApiTokenTokensTokenIdDelete successfully', function(done) {
        //uncomment below and update the code to test deleteApiTokenTokensTokenIdDelete
        //instance.deleteApiTokenTokensTokenIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listApiTokensTokensGet', function() {
      it('should call listApiTokensTokensGet successfully', function(done) {
        //uncomment below and update the code to test listApiTokensTokensGet
        //instance.listApiTokensTokensGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
