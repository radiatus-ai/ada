# PlatformApi.AuthApi

All URIs are relative to _http://localhost_

| Method                                                              | HTTP request         | Description  |
| ------------------------------------------------------------------- | -------------------- | ------------ |
| [**loginGoogleAuthLoginPost**](AuthApi.md#loginGoogleAuthLoginPost) | **POST** /auth/login | Login Google |

## loginGoogleAuthLoginPost

> Object loginGoogleAuthLoginPost(postQuery)

Login Google

### Example

```javascript
import PlatformApi from "platform_api";

let apiInstance = new PlatformApi.AuthApi();
let postQuery = new PlatformApi.PostQuery(); // PostQuery |
apiInstance.loginGoogleAuthLoginPost(postQuery, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + data);
  }
});
```

### Parameters

| Name          | Type                          | Description | Notes |
| ------------- | ----------------------------- | ----------- | ----- |
| **postQuery** | [**PostQuery**](PostQuery.md) |             |

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
