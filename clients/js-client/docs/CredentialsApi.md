# PlatformApi.CredentialsApi

All URIs are relative to _http://localhost_

| Method                                                                                                                         | HTTP request                                   | Description       |
| ------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------- | ----------------- |
| [**createCredentialAdaV1CredentialsPost**](CredentialsApi.md#createCredentialAdaV1CredentialsPost)                             | **POST** /ada/v1/credentials/                  | Create Credential |
| [**deleteCredentialAdaV1CredentialsCredentialIdDelete**](CredentialsApi.md#deleteCredentialAdaV1CredentialsCredentialIdDelete) | **DELETE** /ada/v1/credentials/{credential_id} | Delete Credential |
| [**readCredentialAdaV1CredentialsCredentialIdGet**](CredentialsApi.md#readCredentialAdaV1CredentialsCredentialIdGet)           | **GET** /ada/v1/credentials/{credential_id}    | Read Credential   |
| [**readCredentialsAdaV1CredentialsGet**](CredentialsApi.md#readCredentialsAdaV1CredentialsGet)                                 | **GET** /ada/v1/credentials/                   | Read Credentials  |
| [**updateCredentialAdaV1CredentialsCredentialIdPut**](CredentialsApi.md#updateCredentialAdaV1CredentialsCredentialIdPut)       | **PUT** /ada/v1/credentials/{credential_id}    | Update Credential |

## createCredentialAdaV1CredentialsPost

> Credential createCredentialAdaV1CredentialsPost(credentialCreate, opts)

Create Credential

Create a new credential.

### Example

```javascript
import PlatformApi from "platform_api";
let defaultClient = PlatformApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications["HTTPBearer"];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new PlatformApi.CredentialsApi();
let credentialCreate = new PlatformApi.CredentialCreate(); // CredentialCreate |
let opts = {
  xAdaToken: "xAdaToken_example", // String |
};
apiInstance.createCredentialAdaV1CredentialsPost(
  credentialCreate,
  opts,
  (error, data, response) => {
    if (error) {
      console.error(error);
    } else {
      console.log("API called successfully. Returned data: " + data);
    }
  },
);
```

### Parameters

| Name                 | Type                                        | Description | Notes      |
| -------------------- | ------------------------------------------- | ----------- | ---------- |
| **credentialCreate** | [**CredentialCreate**](CredentialCreate.md) |             |
| **xAdaToken**        | **String**                                  |             | [optional] |

### Return type

[**Credential**](Credential.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## deleteCredentialAdaV1CredentialsCredentialIdDelete

> Credential deleteCredentialAdaV1CredentialsCredentialIdDelete(credentialId, opts)

Delete Credential

Delete a credential.

### Example

```javascript
import PlatformApi from "platform_api";
let defaultClient = PlatformApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications["HTTPBearer"];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new PlatformApi.CredentialsApi();
let credentialId = 56; // Number |
let opts = {
  xAdaToken: "xAdaToken_example", // String |
};
apiInstance.deleteCredentialAdaV1CredentialsCredentialIdDelete(
  credentialId,
  opts,
  (error, data, response) => {
    if (error) {
      console.error(error);
    } else {
      console.log("API called successfully. Returned data: " + data);
    }
  },
);
```

### Parameters

| Name             | Type       | Description | Notes      |
| ---------------- | ---------- | ----------- | ---------- |
| **credentialId** | **Number** |             |
| **xAdaToken**    | **String** |             | [optional] |

### Return type

[**Credential**](Credential.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## readCredentialAdaV1CredentialsCredentialIdGet

> Credential readCredentialAdaV1CredentialsCredentialIdGet(credentialId, opts)

Read Credential

Get a specific credential by ID.

### Example

```javascript
import PlatformApi from "platform_api";
let defaultClient = PlatformApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications["HTTPBearer"];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new PlatformApi.CredentialsApi();
let credentialId = 56; // Number |
let opts = {
  xAdaToken: "xAdaToken_example", // String |
};
apiInstance.readCredentialAdaV1CredentialsCredentialIdGet(
  credentialId,
  opts,
  (error, data, response) => {
    if (error) {
      console.error(error);
    } else {
      console.log("API called successfully. Returned data: " + data);
    }
  },
);
```

### Parameters

| Name             | Type       | Description | Notes      |
| ---------------- | ---------- | ----------- | ---------- |
| **credentialId** | **Number** |             |
| **xAdaToken**    | **String** |             | [optional] |

### Return type

[**Credential**](Credential.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## readCredentialsAdaV1CredentialsGet

> [Credential] readCredentialsAdaV1CredentialsGet(opts)

Read Credentials

Retrieve credentials.

### Example

```javascript
import PlatformApi from "platform_api";
let defaultClient = PlatformApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications["HTTPBearer"];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new PlatformApi.CredentialsApi();
let opts = {
  skip: 0, // Number |
  limit: 100, // Number |
  xAdaToken: "xAdaToken_example", // String |
};
apiInstance.readCredentialsAdaV1CredentialsGet(
  opts,
  (error, data, response) => {
    if (error) {
      console.error(error);
    } else {
      console.log("API called successfully. Returned data: " + data);
    }
  },
);
```

### Parameters

| Name          | Type       | Description | Notes                       |
| ------------- | ---------- | ----------- | --------------------------- |
| **skip**      | **Number** |             | [optional] [default to 0]   |
| **limit**     | **Number** |             | [optional] [default to 100] |
| **xAdaToken** | **String** |             | [optional]                  |

### Return type

[**[Credential]**](Credential.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## updateCredentialAdaV1CredentialsCredentialIdPut

> Credential updateCredentialAdaV1CredentialsCredentialIdPut(credentialId, credentialUpdate, opts)

Update Credential

Update a credential.

### Example

```javascript
import PlatformApi from "platform_api";
let defaultClient = PlatformApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications["HTTPBearer"];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new PlatformApi.CredentialsApi();
let credentialId = 56; // Number |
let credentialUpdate = new PlatformApi.CredentialUpdate(); // CredentialUpdate |
let opts = {
  xAdaToken: "xAdaToken_example", // String |
};
apiInstance.updateCredentialAdaV1CredentialsCredentialIdPut(
  credentialId,
  credentialUpdate,
  opts,
  (error, data, response) => {
    if (error) {
      console.error(error);
    } else {
      console.log("API called successfully. Returned data: " + data);
    }
  },
);
```

### Parameters

| Name                 | Type                                        | Description | Notes      |
| -------------------- | ------------------------------------------- | ----------- | ---------- |
| **credentialId**     | **Number**                                  |             |
| **credentialUpdate** | [**CredentialUpdate**](CredentialUpdate.md) |             |
| **xAdaToken**        | **String**                                  |             | [optional] |

### Return type

[**Credential**](Credential.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
