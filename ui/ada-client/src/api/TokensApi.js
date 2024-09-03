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
import APIToken from '../model/APIToken';
import APITokenCreate from '../model/APITokenCreate';
import HTTPValidationError from '../model/HTTPValidationError';

/**
* Tokens service.
* @module api/TokensApi
* @version 0.1.0
*/
export default class TokensApi {

    /**
    * Constructs a new TokensApi.
    * @alias module:api/TokensApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createApiTokenTokensPost operation.
     * @callback module:api/TokensApi~createApiTokenTokensPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/APIToken} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Api Token
     * @param {module:model/APITokenCreate} aPITokenCreate
     * @param {Object} opts Optional parameters
     * @param {String} [xAdaToken]
     * @param {module:api/TokensApi~createApiTokenTokensPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/APIToken}
     */
    createApiTokenTokensPost(aPITokenCreate, opts, callback) {
      opts = opts || {};
      let postBody = aPITokenCreate;
      // verify the required parameter 'aPITokenCreate' is set
      if (aPITokenCreate === undefined || aPITokenCreate === null) {
        throw new Error("Missing the required parameter 'aPITokenCreate' when calling createApiTokenTokensPost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'x-ada-token': opts['xAdaToken']
      };
      let formParams = {
      };

      let authNames = ['HTTPBearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = APIToken;
      return this.apiClient.callApi(
        '/tokens', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteApiTokenTokensTokenIdDelete operation.
     * @callback module:api/TokensApi~deleteApiTokenTokensTokenIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/APIToken} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Api Token
     * @param {Number} tokenId
     * @param {Object} opts Optional parameters
     * @param {String} [xAdaToken]
     * @param {module:api/TokensApi~deleteApiTokenTokensTokenIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/APIToken}
     */
    deleteApiTokenTokensTokenIdDelete(tokenId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'tokenId' is set
      if (tokenId === undefined || tokenId === null) {
        throw new Error("Missing the required parameter 'tokenId' when calling deleteApiTokenTokensTokenIdDelete");
      }

      let pathParams = {
        'token_id': tokenId
      };
      let queryParams = {
      };
      let headerParams = {
        'x-ada-token': opts['xAdaToken']
      };
      let formParams = {
      };

      let authNames = ['HTTPBearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = APIToken;
      return this.apiClient.callApi(
        '/tokens/{token_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listApiTokensTokensGet operation.
     * @callback module:api/TokensApi~listApiTokensTokensGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/APIToken>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Api Tokens
     * @param {Object} opts Optional parameters
     * @param {String} [xAdaToken]
     * @param {module:api/TokensApi~listApiTokensTokensGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/APIToken>}
     */
    listApiTokensTokensGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'x-ada-token': opts['xAdaToken']
      };
      let formParams = {
      };

      let authNames = ['HTTPBearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [APIToken];
      return this.apiClient.callApi(
        '/tokens', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
