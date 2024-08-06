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

import ApiClient from "../ApiClient";

/**
 * The ChatUpdate model module.
 * @module model/ChatUpdate
 * @version 0.1.0
 */
class ChatUpdate {
  /**
   * Constructs a new <code>ChatUpdate</code>.
   * @alias module:model/ChatUpdate
   */
  constructor() {
    ChatUpdate.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>ChatUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ChatUpdate} obj Optional instance to populate.
   * @return {module:model/ChatUpdate} The populated <code>ChatUpdate</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ChatUpdate();

      if (data.hasOwnProperty("name")) {
        obj["name"] = ApiClient.convertToType(data["name"], "String");
      }
      if (data.hasOwnProperty("model")) {
        obj["model"] = ApiClient.convertToType(data["model"], "String");
      }
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>ChatUpdate</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ChatUpdate</code>.
   */
  static validateJSON(data) {
    // ensure the json data is a string
    if (
      data["name"] &&
      !(typeof data["name"] === "string" || data["name"] instanceof String)
    ) {
      throw new Error(
        "Expected the field `name` to be a primitive type in the JSON string but got " +
          data["name"],
      );
    }
    // ensure the json data is a string
    if (
      data["model"] &&
      !(typeof data["model"] === "string" || data["model"] instanceof String)
    ) {
      throw new Error(
        "Expected the field `model` to be a primitive type in the JSON string but got " +
          data["model"],
      );
    }

    return true;
  }
}

/**
 * @member {String} name
 */
ChatUpdate.prototype["name"] = undefined;

/**
 * @member {String} model
 */
ChatUpdate.prototype["model"] = undefined;

export default ChatUpdate;
