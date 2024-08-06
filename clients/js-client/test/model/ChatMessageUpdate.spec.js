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

(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    // AMD.
    define(["expect.js", process.cwd() + "/src/index"], factory);
  } else if (typeof module === "object" && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require("expect.js"), require(process.cwd() + "/src/index"));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.PlatformApi);
  }
})(this, function (expect, PlatformApi) {
  "use strict";

  var instance;

  beforeEach(function () {
    instance = new PlatformApi.ChatMessageUpdate();
  });

  var getProperty = function (object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === "function") return object[getter]();
    else return object[property];
  };

  var setProperty = function (object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === "function") object[setter](value);
    else object[property] = value;
  };

  describe("ChatMessageUpdate", function () {
    it("should create an instance of ChatMessageUpdate", function () {
      // uncomment below and update the code to test ChatMessageUpdate
      //var instance = new PlatformApi.ChatMessageUpdate();
      //expect(instance).to.be.a(PlatformApi.ChatMessageUpdate);
    });

    it('should have the property role (base name: "role")', function () {
      // uncomment below and update the code to test the property role
      //var instance = new PlatformApi.ChatMessageUpdate();
      //expect(instance).to.be();
    });

    it('should have the property content (base name: "content")', function () {
      // uncomment below and update the code to test the property content
      //var instance = new PlatformApi.ChatMessageUpdate();
      //expect(instance).to.be();
    });

    it('should have the property isContextFile (base name: "is_context_file")', function () {
      // uncomment below and update the code to test the property isContextFile
      //var instance = new PlatformApi.ChatMessageUpdate();
      //expect(instance).to.be();
    });

    it('should have the property model (base name: "model")', function () {
      // uncomment below and update the code to test the property model
      //var instance = new PlatformApi.ChatMessageUpdate();
      //expect(instance).to.be();
    });

    it('should have the property tokens (base name: "tokens")', function () {
      // uncomment below and update the code to test the property tokens
      //var instance = new PlatformApi.ChatMessageUpdate();
      //expect(instance).to.be();
    });

    it('should have the property contentRaw (base name: "content_raw")', function () {
      // uncomment below and update the code to test the property contentRaw
      //var instance = new PlatformApi.ChatMessageUpdate();
      //expect(instance).to.be();
    });

    it('should have the property isToolMessage (base name: "is_tool_message")', function () {
      // uncomment below and update the code to test the property isToolMessage
      //var instance = new PlatformApi.ChatMessageUpdate();
      //expect(instance).to.be();
    });
  });
});
