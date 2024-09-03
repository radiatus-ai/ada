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
 * The AppApiCommonEndpointsAuthPostQuery model module.
 * @module model/AppApiCommonEndpointsAuthPostQuery
 * @version 0.1.0
 */
class AppApiCommonEndpointsAuthPostQuery {
    /**
     * Constructs a new <code>AppApiCommonEndpointsAuthPostQuery</code>.
     * @alias module:model/AppApiCommonEndpointsAuthPostQuery
     * @param token {String}
     */
    constructor(token) {

        AppApiCommonEndpointsAuthPostQuery.initialize(this, token);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, token) {
        obj['token'] = token;
    }

    /**
     * Constructs a <code>AppApiCommonEndpointsAuthPostQuery</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AppApiCommonEndpointsAuthPostQuery} obj Optional instance to populate.
     * @return {module:model/AppApiCommonEndpointsAuthPostQuery} The populated <code>AppApiCommonEndpointsAuthPostQuery</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AppApiCommonEndpointsAuthPostQuery();

            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('organization_id')) {
                obj['organization_id'] = ApiClient.convertToType(data['organization_id'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AppApiCommonEndpointsAuthPostQuery</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AppApiCommonEndpointsAuthPostQuery</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of AppApiCommonEndpointsAuthPostQuery.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['token'] && !(typeof data['token'] === 'string' || data['token'] instanceof String)) {
            throw new Error("Expected the field `token` to be a primitive type in the JSON string but got " + data['token']);
        }

        return true;
    }


}

AppApiCommonEndpointsAuthPostQuery.RequiredProperties = ["token"];

/**
 * @member {String} token
 */
AppApiCommonEndpointsAuthPostQuery.prototype['token'] = undefined;

/**
 * @member {Number} organization_id
 */
AppApiCommonEndpointsAuthPostQuery.prototype['organization_id'] = undefined;






export default AppApiCommonEndpointsAuthPostQuery;
