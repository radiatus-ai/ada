# PlatformApi.MeApi

All URIs are relative to _http://localhost_

| Method                                            | HTTP request | Description   |
| ------------------------------------------------- | ------------ | ------------- |
| [**readUsersMeMeGet**](MeApi.md#readUsersMeMeGet) | **GET** /me  | Read Users Me |

## readUsersMeMeGet

> User readUsersMeMeGet(opts)

Read Users Me

### Example

```javascript
import PlatformApi from "platform_api";
let defaultClient = PlatformApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications["HTTPBearer"];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new PlatformApi.MeApi();
let opts = {
  xAdaToken: "xAdaToken_example", // String |
};
apiInstance.readUsersMeMeGet(opts, (error, data, response) => {
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

[**User**](User.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
