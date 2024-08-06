# PlatformApi.TokensApi

All URIs are relative to _http://localhost_

| Method                                                                                  | HTTP request                  | Description      |
| --------------------------------------------------------------------------------------- | ----------------------------- | ---------------- |
| [**createApiTokenTokensPost**](TokensApi.md#createApiTokenTokensPost)                   | **POST** /tokens              | Create Api Token |
| [**deleteApiTokenTokensTokenIdDelete**](TokensApi.md#deleteApiTokenTokensTokenIdDelete) | **DELETE** /tokens/{token_id} | Delete Api Token |
| [**listApiTokensTokensGet**](TokensApi.md#listApiTokensTokensGet)                       | **GET** /tokens               | List Api Tokens  |

## createApiTokenTokensPost

> APIToken createApiTokenTokensPost(aPITokenCreate, opts)

Create Api Token

### Example

```javascript
import PlatformApi from "platform_api";
let defaultClient = PlatformApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications["HTTPBearer"];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new PlatformApi.TokensApi();
let aPITokenCreate = new PlatformApi.APITokenCreate(); // APITokenCreate |
let opts = {
  xAdaToken: "xAdaToken_example", // String |
};
apiInstance.createApiTokenTokensPost(
  aPITokenCreate,
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

| Name               | Type                                    | Description | Notes      |
| ------------------ | --------------------------------------- | ----------- | ---------- |
| **aPITokenCreate** | [**APITokenCreate**](APITokenCreate.md) |             |
| **xAdaToken**      | **String**                              |             | [optional] |

### Return type

[**APIToken**](APIToken.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## deleteApiTokenTokensTokenIdDelete

> APIToken deleteApiTokenTokensTokenIdDelete(tokenId, opts)

Delete Api Token

### Example

```javascript
import PlatformApi from "platform_api";
let defaultClient = PlatformApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications["HTTPBearer"];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new PlatformApi.TokensApi();
let tokenId = 56; // Number |
let opts = {
  xAdaToken: "xAdaToken_example", // String |
};
apiInstance.deleteApiTokenTokensTokenIdDelete(
  tokenId,
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

| Name          | Type       | Description | Notes      |
| ------------- | ---------- | ----------- | ---------- |
| **tokenId**   | **Number** |             |
| **xAdaToken** | **String** |             | [optional] |

### Return type

[**APIToken**](APIToken.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listApiTokensTokensGet

> [APIToken] listApiTokensTokensGet(opts)

List Api Tokens

### Example

```javascript
import PlatformApi from "platform_api";
let defaultClient = PlatformApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications["HTTPBearer"];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new PlatformApi.TokensApi();
let opts = {
  xAdaToken: "xAdaToken_example", // String |
};
apiInstance.listApiTokensTokensGet(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + data);
  }
});
```

### Parameters

| Name          | Type       | Description | Notes      |
| ------------- | ---------- | ----------- | ---------- |
| **xAdaToken** | **String** |             | [optional] |

### Return type

[**[APIToken]**](APIToken.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
