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
    instance = new PlatformApi.ChatsApi();
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

  describe('ChatsApi', function() {
    describe('createChatMessageAdaV1ChatsChatIdMessagesPost', function() {
      it('should call createChatMessageAdaV1ChatsChatIdMessagesPost successfully', function(done) {
        //uncomment below and update the code to test createChatMessageAdaV1ChatsChatIdMessagesPost
        //instance.createChatMessageAdaV1ChatsChatIdMessagesPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteChatAdaV1ChatsChatIdDelete', function() {
      it('should call deleteChatAdaV1ChatsChatIdDelete successfully', function(done) {
        //uncomment below and update the code to test deleteChatAdaV1ChatsChatIdDelete
        //instance.deleteChatAdaV1ChatsChatIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readChatAdaV1ChatsChatIdGet', function() {
      it('should call readChatAdaV1ChatsChatIdGet successfully', function(done) {
        //uncomment below and update the code to test readChatAdaV1ChatsChatIdGet
        //instance.readChatAdaV1ChatsChatIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readChatMessagesAdaV1ChatsChatIdMessagesGet', function() {
      it('should call readChatMessagesAdaV1ChatsChatIdMessagesGet successfully', function(done) {
        //uncomment below and update the code to test readChatMessagesAdaV1ChatsChatIdMessagesGet
        //instance.readChatMessagesAdaV1ChatsChatIdMessagesGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateChatAdaV1ChatsChatIdPut', function() {
      it('should call updateChatAdaV1ChatsChatIdPut successfully', function(done) {
        //uncomment below and update the code to test updateChatAdaV1ChatsChatIdPut
        //instance.updateChatAdaV1ChatsChatIdPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
