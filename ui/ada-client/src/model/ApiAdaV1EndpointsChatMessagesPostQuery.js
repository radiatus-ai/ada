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

import ApiClient from '../ApiClient';

/**
 * The ApiAdaV1EndpointsChatMessagesPostQuery model module.
 * @module model/ApiAdaV1EndpointsChatMessagesPostQuery
 * @version 0.1.0
 */
class ApiAdaV1EndpointsChatMessagesPostQuery {
    /**
     * Constructs a new <code>ApiAdaV1EndpointsChatMessagesPostQuery</code>.
     * @alias module:model/ApiAdaV1EndpointsChatMessagesPostQuery
     * @param prompt {String}
     * @param chatId {String}
     */
    constructor(prompt, chatId) {

        ApiAdaV1EndpointsChatMessagesPostQuery.initialize(this, prompt, chatId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, prompt, chatId) {
        obj['prompt'] = prompt;
        obj['chatId'] = chatId;
    }

    /**
     * Constructs a <code>ApiAdaV1EndpointsChatMessagesPostQuery</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApiAdaV1EndpointsChatMessagesPostQuery} obj Optional instance to populate.
     * @return {module:model/ApiAdaV1EndpointsChatMessagesPostQuery} The populated <code>ApiAdaV1EndpointsChatMessagesPostQuery</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApiAdaV1EndpointsChatMessagesPostQuery();

            if (data.hasOwnProperty('prompt')) {
                obj['prompt'] = ApiClient.convertToType(data['prompt'], 'String');
            }
            if (data.hasOwnProperty('chatId')) {
                obj['chatId'] = ApiClient.convertToType(data['chatId'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ApiAdaV1EndpointsChatMessagesPostQuery</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ApiAdaV1EndpointsChatMessagesPostQuery</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ApiAdaV1EndpointsChatMessagesPostQuery.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['prompt'] && !(typeof data['prompt'] === 'string' || data['prompt'] instanceof String)) {
            throw new Error("Expected the field `prompt` to be a primitive type in the JSON string but got " + data['prompt']);
        }
        // ensure the json data is a string
        if (data['chatId'] && !(typeof data['chatId'] === 'string' || data['chatId'] instanceof String)) {
            throw new Error("Expected the field `chatId` to be a primitive type in the JSON string but got " + data['chatId']);
        }

        return true;
    }


}

ApiAdaV1EndpointsChatMessagesPostQuery.RequiredProperties = ["prompt", "chatId"];

/**
 * @member {String} prompt
 */
ApiAdaV1EndpointsChatMessagesPostQuery.prototype['prompt'] = undefined;

/**
 * @member {String} chatId
 */
ApiAdaV1EndpointsChatMessagesPostQuery.prototype['chatId'] = undefined;






export default ApiAdaV1EndpointsChatMessagesPostQuery;
