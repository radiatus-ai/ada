# PlatformApi.CredentialsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCredentialCredentialsPost**](CredentialsApi.md#createCredentialCredentialsPost) | **POST** /credentials/ | Create Credential
[**deleteCredentialCredentialsCredentialIdDelete**](CredentialsApi.md#deleteCredentialCredentialsCredentialIdDelete) | **DELETE** /credentials/{credential_id} | Delete Credential
[**readCredentialCredentialsCredentialIdGet**](CredentialsApi.md#readCredentialCredentialsCredentialIdGet) | **GET** /credentials/{credential_id} | Read Credential
[**readCredentialsCredentialsGet**](CredentialsApi.md#readCredentialsCredentialsGet) | **GET** /credentials/ | Read Credentials
[**updateCredentialCredentialsCredentialIdPut**](CredentialsApi.md#updateCredentialCredentialsCredentialIdPut) | **PUT** /credentials/{credential_id} | Update Credential



## createCredentialCredentialsPost

> Credential createCredentialCredentialsPost(credentialCreate)

Create Credential

Create a new credential.

### Example

```javascript
import PlatformApi from 'platform_api';

let apiInstance = new PlatformApi.CredentialsApi();
let credentialCreate = new PlatformApi.CredentialCreate(); // CredentialCreate |
apiInstance.createCredentialCredentialsPost(credentialCreate, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **credentialCreate** | [**CredentialCreate**](CredentialCreate.md)|  |

### Return type

[**Credential**](Credential.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteCredentialCredentialsCredentialIdDelete

> Credential deleteCredentialCredentialsCredentialIdDelete(credentialId)

Delete Credential

Delete a credential.

### Example

```javascript
import PlatformApi from 'platform_api';

let apiInstance = new PlatformApi.CredentialsApi();
let credentialId = 56; // Number |
apiInstance.deleteCredentialCredentialsCredentialIdDelete(credentialId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **credentialId** | **Number**|  |

### Return type

[**Credential**](Credential.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readCredentialCredentialsCredentialIdGet

> Credential readCredentialCredentialsCredentialIdGet(credentialId)

Read Credential

Get a specific credential by ID.

### Example

```javascript
import PlatformApi from 'platform_api';

let apiInstance = new PlatformApi.CredentialsApi();
let credentialId = 56; // Number |
apiInstance.readCredentialCredentialsCredentialIdGet(credentialId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **credentialId** | **Number**|  |

### Return type

[**Credential**](Credential.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readCredentialsCredentialsGet

> [Credential] readCredentialsCredentialsGet(opts)

Read Credentials

Retrieve credentials.

### Example

```javascript
import PlatformApi from 'platform_api';

let apiInstance = new PlatformApi.CredentialsApi();
let opts = {
  'skip': 0, // Number |
  'limit': 100 // Number |
};
apiInstance.readCredentialsCredentialsGet(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skip** | **Number**|  | [optional] [default to 0]
 **limit** | **Number**|  | [optional] [default to 100]

### Return type

[**[Credential]**](Credential.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateCredentialCredentialsCredentialIdPut

> Credential updateCredentialCredentialsCredentialIdPut(credentialId, credentialUpdate)

Update Credential

Update a credential.

### Example

```javascript
import PlatformApi from 'platform_api';

let apiInstance = new PlatformApi.CredentialsApi();
let credentialId = 56; // Number |
let credentialUpdate = new PlatformApi.CredentialUpdate(); // CredentialUpdate |
apiInstance.updateCredentialCredentialsCredentialIdPut(credentialId, credentialUpdate, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **credentialId** | **Number**|  |
 **credentialUpdate** | [**CredentialUpdate**](CredentialUpdate.md)|  |

### Return type

[**Credential**](Credential.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
