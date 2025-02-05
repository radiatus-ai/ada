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
import Credential from '../model/Credential';
import CredentialCreate from '../model/CredentialCreate';
import CredentialUpdate from '../model/CredentialUpdate';
import HTTPValidationError from '../model/HTTPValidationError';

/**
* Credentials service.
* @module api/CredentialsApi
* @version 0.1.0
*/
export default class CredentialsApi {

    /**
    * Constructs a new CredentialsApi.
    * @alias module:api/CredentialsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createCredentialCredentialsPost operation.
     * @callback module:api/CredentialsApi~createCredentialCredentialsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Credential} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Credential
     * Create a new credential.
     * @param {module:model/CredentialCreate} credentialCreate
     * @param {module:api/CredentialsApi~createCredentialCredentialsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Credential}
     */
    createCredentialCredentialsPost(credentialCreate, callback) {
      let postBody = credentialCreate;
      // verify the required parameter 'credentialCreate' is set
      if (credentialCreate === undefined || credentialCreate === null) {
        throw new Error("Missing the required parameter 'credentialCreate' when calling createCredentialCredentialsPost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Credential;
      return this.apiClient.callApi(
        '/credentials/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteCredentialCredentialsCredentialIdDelete operation.
     * @callback module:api/CredentialsApi~deleteCredentialCredentialsCredentialIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Credential} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Credential
     * Delete a credential.
     * @param {Number} credentialId
     * @param {module:api/CredentialsApi~deleteCredentialCredentialsCredentialIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Credential}
     */
    deleteCredentialCredentialsCredentialIdDelete(credentialId, callback) {
      let postBody = null;
      // verify the required parameter 'credentialId' is set
      if (credentialId === undefined || credentialId === null) {
        throw new Error("Missing the required parameter 'credentialId' when calling deleteCredentialCredentialsCredentialIdDelete");
      }

      let pathParams = {
        'credential_id': credentialId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Credential;
      return this.apiClient.callApi(
        '/credentials/{credential_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the readCredentialCredentialsCredentialIdGet operation.
     * @callback module:api/CredentialsApi~readCredentialCredentialsCredentialIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Credential} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Read Credential
     * Get a specific credential by ID.
     * @param {Number} credentialId
     * @param {module:api/CredentialsApi~readCredentialCredentialsCredentialIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Credential}
     */
    readCredentialCredentialsCredentialIdGet(credentialId, callback) {
      let postBody = null;
      // verify the required parameter 'credentialId' is set
      if (credentialId === undefined || credentialId === null) {
        throw new Error("Missing the required parameter 'credentialId' when calling readCredentialCredentialsCredentialIdGet");
      }

      let pathParams = {
        'credential_id': credentialId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Credential;
      return this.apiClient.callApi(
        '/credentials/{credential_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the readCredentialsCredentialsGet operation.
     * @callback module:api/CredentialsApi~readCredentialsCredentialsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Credential>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Read Credentials
     * Retrieve credentials.
     * @param {Object} opts Optional parameters
     * @param {Number} [skip = 0)]
     * @param {Number} [limit = 100)]
     * @param {module:api/CredentialsApi~readCredentialsCredentialsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Credential>}
     */
    readCredentialsCredentialsGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'skip': opts['skip'],
        'limit': opts['limit']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Credential];
      return this.apiClient.callApi(
        '/credentials/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateCredentialCredentialsCredentialIdPut operation.
     * @callback module:api/CredentialsApi~updateCredentialCredentialsCredentialIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Credential} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Credential
     * Update a credential.
     * @param {Number} credentialId
     * @param {module:model/CredentialUpdate} credentialUpdate
     * @param {module:api/CredentialsApi~updateCredentialCredentialsCredentialIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Credential}
     */
    updateCredentialCredentialsCredentialIdPut(credentialId, credentialUpdate, callback) {
      let postBody = credentialUpdate;
      // verify the required parameter 'credentialId' is set
      if (credentialId === undefined || credentialId === null) {
        throw new Error("Missing the required parameter 'credentialId' when calling updateCredentialCredentialsCredentialIdPut");
      }
      // verify the required parameter 'credentialUpdate' is set
      if (credentialUpdate === undefined || credentialUpdate === null) {
        throw new Error("Missing the required parameter 'credentialUpdate' when calling updateCredentialCredentialsCredentialIdPut");
      }

      let pathParams = {
        'credential_id': credentialId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Credential;
      return this.apiClient.callApi(
        '/credentials/{credential_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
